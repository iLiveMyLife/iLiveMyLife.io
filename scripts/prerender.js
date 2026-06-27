/*
 * Static prerender for the iLiveMyLife landing (CRA / client-rendered).
 *
 * After `npm run build`, this script boots a tiny static server over build/
 * (with SPA fallback), then loads every route in headless Chrome and writes the
 * fully-rendered HTML back to build/<path>/index.html. This is what makes the
 * content visible to search engines AND AI crawlers that don't execute JS.
 *
 * The browser identifies itself with a "Prerender" user-agent so the carousel
 * disables autoplay (see src/presentation/Presentation.js), keeping each URL's
 * snapshot deterministic (correct slide + title + canonical).
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
// puppeteer v25+ is ESM-only — loaded via dynamic import() inside run().

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const SITEMAP = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
const PORT = 4123;
const LOCAL_ORIGIN = `http://localhost:${PORT}`;
const PROD_ORIGIN = 'https://www.ilivemylife.io';

// Fix up the captured HTML before writing it to disk:
//  - rewrite the prerender server's localhost origin to the production one
//    (canonical, og:url, og:image, ld+json all use window.location.origin)
//  - drop the static default <meta name="description"> from index.html when
//    react-helmet has already emitted a page-specific one (avoids duplicates)
function postProcess(html) {
  html = html.split(LOCAL_ORIGIN).join(PROD_ORIGIN);
  if (/<meta name="description"[^>]*data-react-helmet/.test(html)) {
    html = html.replace(/<meta name="description"(?![^>]*data-react-helmet)[^>]*>\s*/g, '');
  }
  return html;
}

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.webp': 'image/webp', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.map': 'application/json',
  '.txt': 'text/plain', '.xml': 'application/xml',
};

function routesFromSitemap() {
  const xml = fs.readFileSync(SITEMAP, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const paths = new Set(['/']);
  for (const loc of locs) {
    try { paths.add(new URL(loc).pathname || '/'); } catch (_) { /* ignore */ }
  }
  paths.add('/membership');
  return [...paths];
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(BUILD_DIR, urlPath);
      // If the request has no file extension, it's an app route -> serve index.html (SPA fallback).
      if (!path.extname(urlPath) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(BUILD_DIR, 'index.html');
      }
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function run() {
  if (!fs.existsSync(path.join(BUILD_DIR, 'index.html'))) {
    console.error('[prerender] build/index.html not found — run `npm run build` first.');
    process.exit(1);
  }

  const puppeteer = (await import('puppeteer')).default;

  const routes = routesFromSitemap();
  console.log(`[prerender] ${routes.length} routes to snapshot`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let ok = 0;
  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (compatible; PrerenderBot) HeadlessChrome');
      const url = `http://localhost:${PORT}${route}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
        // Wait until React has mounted real content into #root.
        await page.waitForFunction(
          () => { const r = document.getElementById('root'); return r && r.children.length > 0 && r.innerText.trim().length > 50; },
          { timeout: 15000 }
        );
        const html = postProcess(await page.content());
        const outDir = route === '/' ? BUILD_DIR : path.join(BUILD_DIR, route);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
        ok++;
        console.log(`[prerender] ok  ${route}`);
      } catch (e) {
        console.warn(`[prerender] FAIL ${route}: ${e.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] done: ${ok}/${routes.length} routes prerendered`);
  if (ok === 0) process.exit(1);
}

run().catch((e) => { console.error(e); process.exit(1); });
