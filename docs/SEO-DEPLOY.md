# SEO / prerender — how this works and how to deploy

This landing is a client-rendered CRA app. Search engines and AI crawlers that
don't run JS used to see an empty `<div id="root">`. We fixed that with a
**build-time prerender**: after `npm run build`, `scripts/prerender.js` loads
every route in headless Chrome and writes the fully-rendered HTML to
`build/<route>/index.html`, with correct per-page `<title>`, `meta description`,
`canonical` and OpenGraph/Twitter tags baked in.

## Build

```
NODE_OPTIONS=--openssl-legacy-provider yarn build
```

`yarn build` runs the prerender automatically via the `postbuild` hook. The
openssl flag is required because react-scripts 3.4.4 (webpack 4) runs on Node 18.

## Deploy (AWS Amplify Hosting)

Amplify builds from the repo using `amplify.yml`. Two things are required for the
prerendered pages to actually be served:

### 1. Build env (handled by `amplify.yml`)
Node 18, the openssl flag, and the Linux libs Chromium needs to run headless
during prerender. If prerender fails in the Amplify build container, see the
fallback note at the bottom.

### 2. Rewrites & redirects (MANUAL — Amplify Console)
By default Amplify has a SPA catch-all rewrite that sends **every** path to
`/index.html` (200). That is why all 30 slide URLs currently return the empty
root shell. Replace the rewrite rules with the contents of
[`amplify-rewrites.json`](./amplify-rewrites.json):

Amplify Console → App settings → Rewrites and redirects → "Open text editor" →
paste the JSON → save.

These map each clean URL (e.g. `/lifebot`) to its prerendered file
(`/lifebot/index.html`), with a final SPA fallback for anything unlisted.

> When you add a NEW route, update **both** `public/sitemap.xml` **and**
> `docs/amplify-rewrites.json` (regen: `node` snippet in git history), then
> re-paste the rules in the console.

## Verify after deploy

```
curl -s https://www.ilivemylife.io/lifebot | grep -c "AI Companion"   # expect > 0
```
If it returns the slide text (not the 902-byte shell), prerendering is live.

## Fallback if puppeteer won't run in Amplify's build container

Prerender needs headless Chrome at build time. If the Amplify build can't run it,
options: (a) add the missing `yum` libs in `amplify.yml` preBuild (already
attempted), (b) switch to a Docker-based Amplify build image, or (c) move
prerender to a small CI step (GitHub Action) that builds and pushes the artifact.
