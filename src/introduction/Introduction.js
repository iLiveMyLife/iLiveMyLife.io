import React from 'react';
import './Introduction.css';
import { Helmet } from "react-helmet";

const APP = "https://app.ilivemylife.io";

/* ── custom line icons (stroke = currentColor, tinted per card accent) ── */
const ICONS = {
    graph: (
        <g>
            <circle cx="5" cy="6.5" r="2.1" /><circle cx="19" cy="8" r="2.1" /><circle cx="11.5" cy="18" r="2.1" />
            <path d="M6.7 7.7 10.4 16.2M13.4 16.8 17.4 9.6M7 6.1 17 7.7" />
        </g>
    ),
    chat: (
        <g>
            <path d="M4.5 5.5h15v9.5H10l-4 3.6V5.5Z" />
            <path d="M8 9.2h8M8 12h5" />
        </g>
    ),
    bot: (
        <g>
            <rect x="4.5" y="8.5" width="15" height="10" rx="3.2" />
            <circle cx="9.6" cy="13.4" r="1.15" /><circle cx="14.4" cy="13.4" r="1.15" />
            <path d="M12 8.5V5.4" /><circle cx="12" cy="4.4" r="1.15" />
            <path d="M3 12.5v2M21 12.5v2" />
        </g>
    ),
    auto: (
        <g>
            <path d="M19.5 9.2A7 7 0 1 0 20 13.4" />
            <polyline points="20 4.2 20 9.2 15 9.2" />
            <circle cx="12" cy="12" r="2.2" />
        </g>
    ),
    code: (
        <g>
            <polyline points="8 8 4 12 8 16" /><polyline points="16 8 20 12 16 16" />
            <line x1="13.4" y1="6.2" x2="10.6" y2="17.8" />
        </g>
    ),
    shield: (
        <g>
            <path d="M12 3 19 6v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6l7-3Z" />
            <circle cx="12" cy="10.8" r="1.4" /><line x1="12" y1="11.9" x2="12" y2="14.4" />
        </g>
    ),
};
const Icon = ({ name }) => (
    <svg className="ilml-ic" viewBox="0 0 24 24" width="26" height="26" fill="none"
         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[name]}
    </svg>
);

const capabilities = [
    { accent: "cyan",   icon: "graph",  title: "A living knowledge graph",
      body: "Every idea, project and person is a node. Connect them, reorganize them together, and keep a full, replayable history of every change.",
      href: "/knowledge-graph/", more: "Nodes, history & 3D" },
    { accent: "teal",   icon: "chat",   title: "Chat that becomes documentation",
      body: "Every node has its own chat. Discussion and documentation happen at once — decisions live where the work is, not lost in a Slack scroll." },
    { accent: "blue",   icon: "bot",    title: "Lifebot — your AI, in context",
      body: "An AI that actually knows your world. Ask it inside any node, and control how far it looks — this project only, or your whole life." },
    { accent: "orange", icon: "auto",   title: "Automation that programs itself",
      body: "Turn any node into automation that runs itself: it can call your tools, ask Lifebot, decide, and even spawn more automation to watch your projects — all under your authorization.",
      href: "/automation/", more: "See a contract" },
    { accent: "maroon", icon: "code",   title: "SDK · CLI · MCP",
      body: "Open SDK, CLI and MCP. External AIs like Claude and Kimi work directly inside your graph — and anyone can build plugins.",
      href: "/developers/", more: "Install & examples" },
    { accent: "cyan",   icon: "shield", title: "Private, collective, yours",
      body: "Share a node with your team, or lock it down. Private nodes and wallets stay secret — even from the AI. KYC proves who’s human.",
      href: "/privacy/", more: "Tags × who sees what" },
];

const useCases = [
    { tag: "Commerce", title: "A shop on your account", body: "BasicNeeds runs on your iLiveMyLife login — every product has its own chat between buyers, sellers and AI.",
      href: "https://basicneeds.me", cta: "basicneeds.me", external: true },
    { tag: "Identity", title: "Digital clones", body: "DigitalTwins.team gives companies and people living pages — a digital twin that represents you and works for you.",
      href: "https://digitaltwins.team", cta: "digitaltwins.team", external: true },
    { tag: "Automation", title: "Apply to jobs, as you", body: "The LinkedIn plugin installs into your ilml CLI and answers application forms in your voice — Lifebot replies from a node that knows your résumé.",
      href: "https://www.npmjs.com/package/ilml-plugin-linkedin", cta: "npm: ilml-plugin-linkedin", external: true },
    { tag: "Economy", title: "Knowledge becomes value", body: "As your graph grows, projects gain worth — back and fund the ones you believe in, right on the graph.",
      href: "/crypto-communism-and-nasdaq-of-ideas", cta: "Read the vision" },
];

const tiers = [
    { id: 0, name: "Individual", price: "Free", note: "Your own graph", color: "cyan" },
    { id: 1, name: "Partner", price: "$10/mo", note: "Build with others", color: "teal" },
    { id: 2, name: "Leader", price: "$100/mo", note: "Run a community", color: "orange" },
    { id: 3, name: "Investor", price: "$1000/yr", note: "Back the vision", color: "maroon" },
];

/* deep-dive pages (the slide URLs) — surfaced from the homepage for depth + SEO */
const deepDives = [
    { path: "/lifebot", title: "Lifebot — your AI companion" },
    { path: "/3d-graph-for-ilivemylife", title: "The graph in 3D, AR & VR" },
    { path: "/collaboration-on-the-context", title: "Collaboration on the context" },
    { path: "/metaverse-of-formats", title: "A metaverse of formats" },
    { path: "/cloud-programming-interface", title: "Every node is a live API" },
    { path: "/distributed-project-management", title: "Distributed project management" },
    { path: "/crypto-communism-and-nasdaq-of-ideas", title: "Crypto communism & a NASDAQ of ideas" },
    { path: "/envisioning-a-new-commerce-ecosystem-basicneeds", title: "A new commerce ecosystem" },
];

/* copyable command block (copy works after hydration; code is in the prerendered HTML) */
const CopyBlock = ({ label, code }) => (
    <div className="ilml-code">
        <div className="ilml-code-bar">
            <span className="ilml-code-label">{label}</span>
            <button type="button" className="ilml-code-copy" aria-label={`Copy: ${label}`}
                onClick={(e) => {
                    const btn = e.currentTarget;
                    if (navigator.clipboard) { navigator.clipboard.writeText(code); }
                    btn.textContent = "Copied ✓";
                    setTimeout(() => { btn.textContent = "Copy"; }, 1600);
                }}>Copy</button>
        </div>
        <pre className="ilml-code-pre"><code>{code}</code></pre>
    </div>
);

const Introduction = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>iLiveMyLife - The knowledge graph that thinks and acts with you</title>
            <meta name="description" content="iLiveMyLife is a collaborative knowledge graph and second brain that doesn’t just remember — it acts. Organize your life and projects, chat in context with Lifebot AI, automate with contracts, and build together." />
            <link rel="canonical" href="https://www.ilivemylife.io/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="iLiveMyLife - The knowledge graph that thinks and acts with you" />
            <meta property="og:description" content="A second brain that doesn’t just remember — it acts. Your life and projects as one living graph, built together by you, your team and AI." />
            <meta property="og:url" content="https://www.ilivemylife.io/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="iLiveMyLife - The knowledge graph that thinks and acts with you" />
            <meta name="twitter:description" content="A second brain that doesn’t just remember — it acts. Built together by you, your team and AI." />
            <meta name="twitter:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "iLiveMyLife",
                "alternateName": "iLiveMyLife - The Collaborative Knowledge Graph",
                "url": "https://www.ilivemylife.io/",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web, iOS, Android",
                "description": "A collaborative knowledge graph and second brain that doesn’t just remember — it acts. Organize your life and projects as connected nodes; chat in context with Lifebot AI; automate with self-programming contracts; build together with privacy, wallets and KYC; and explore in 3D. Open SDK, CLI and MCP let external AIs work inside your graph.",
                "featureList": ["Knowledge graph", "Node messengers with Lifebot AI", "Self-programming contracts", "SDK / CLI / MCP for AI agents", "Private nodes and wallets", "KYC verification", "3D graph", "Real-time collaboration"],
                "offers": [
                    { "@type": "Offer", "name": "Individual", "price": "0", "priceCurrency": "USD" },
                    { "@type": "Offer", "name": "Partner", "priceCurrency": "USD",
                      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "10", "priceCurrency": "USD", "billingDuration": "P1M" } },
                    { "@type": "Offer", "name": "Leader", "priceCurrency": "USD",
                      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "100", "priceCurrency": "USD", "billingDuration": "P1M" } },
                    { "@type": "Offer", "name": "Investor", "priceCurrency": "USD",
                      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "1000", "priceCurrency": "USD", "billingDuration": "P1Y" } }
                ],
                "author": {
                    "@type": "Organization",
                    "name": "iLiveMyLife",
                    "url": "https://www.ilivemylife.io/",
                    "logo": "https://www.ilivemylife.io/images/apple-touch-icon.png",
                    "sameAs": ["https://app.ilivemylife.io", "https://digitaltwins.team", "https://basicneeds.me"]
                }
            })}</script>
        </Helmet>

        {/* ───────────── Hero (2-column: story + graph) ───────────── */}
        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-hero-glow ilml-hero-glow-2" aria-hidden="true" />
            <div className="ilml-hero-inner">
                <div className="ilml-hero-copy">
                    <span className="ilml-eyebrow">The graph where you, your team &amp; AI build together</span>
                    <h1 className="ilml-h1">
                        A second brain that doesn’t just remember —<br />
                        <span className="ilml-grad-text">it acts.</span>
                    </h1>
                    <p className="ilml-lead">
                        Your life and projects become one living graph. You, your team and AI build it
                        together — and it can think and run on its own.
                    </p>
                    <div className="ilml-cta-row">
                        <a className="ilml-btn ilml-btn-primary" href={`${APP}/signup`}>Start your graph — free →</a>
                        <a className="ilml-btn ilml-btn-ghost" href="#how">See how it works</a>
                    </div>
                    <p className="ilml-tagline">iLiveMyLife <em>…and so do you.</em></p>
                </div>
                <div className="ilml-hero-visual">
                    <GraphHero />
                </div>
            </div>
        </section>

        {/* ───────────── The shift ───────────── */}
        <section className="ilml-band" id="how">
            <div className="ilml-band-inner">
                <h2 className="ilml-h2">Email and chats lose your best thinking.<br /><span className="ilml-blue">Your graph keeps it.</span></h2>
                <p className="ilml-band-text">
                    In Slack, Discord or email, knowledge gets buried in endless history. In iLiveMyLife,
                    communication happens <strong>at the same time</strong> as building documentation — every
                    conversation structures itself into a graph you actually own and control.
                </p>
            </div>
        </section>

        {/* ───────────── Capabilities ───────────── */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">What you can do</span>
                <h2 className="ilml-h2">One graph. Things no note app can do.</h2>
            </div>
            <div className="ilml-grid">
                {capabilities.map((c, i) => {
                    const inner = (
                        <>
                            <div className="ilml-card-icon"><Icon name={c.icon} /></div>
                            <h3 className="ilml-card-title">{c.title}</h3>
                            <p className="ilml-card-body">{c.body}</p>
                            {c.more && <span className="ilml-card-more">{c.more} →</span>}
                        </>
                    );
                    return c.href ? (
                        <a className={`ilml-card accent-${c.accent} ilml-card-link`} href={c.href} key={c.title} style={{ animationDelay: `${i * 60}ms` }}>{inner}</a>
                    ) : (
                        <div className={`ilml-card accent-${c.accent}`} key={c.title} style={{ animationDelay: `${i * 60}ms` }}>{inner}</div>
                    );
                })}
            </div>
        </section>

        {/* ───────────── Ecosystem / use cases ───────────── */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">An ecosystem, not an app</span>
                <h2 className="ilml-h2">Built on the same graph.</h2>
            </div>
            <div className="ilml-usecases">
                {useCases.map((u) => (
                    <a className="ilml-usecase" key={u.title} href={u.href}
                       {...(u.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        <span className="ilml-usecase-tag">{u.tag}</span>
                        <h3 className="ilml-usecase-title">{u.title}</h3>
                        <p className="ilml-usecase-body">{u.body}</p>
                        <span className="ilml-usecase-cta">{u.cta} <span aria-hidden="true">→</span></span>
                    </a>
                ))}
            </div>
        </section>

        {/* ───────────── For developers ───────────── */}
        <section className="ilml-section" id="developers">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">For developers</span>
                <h2 className="ilml-h2">Your graph — from the command line, and from your AI.</h2>
                <p className="ilml-section-sub">Open SDK, CLI and MCP server. Script your graph, or let Claude, Cursor and Windsurf work inside it directly.</p>
            </div>
            <div className="ilml-dev">
                <CopyBlock label="1 · Install the CLI + SDK" code={"npm install -g @ilivemylife/graph-sdk\nilml login"} />
                <CopyBlock label="2 · Plug your graph into Claude Code (MCP)" code={"claude mcp add --scope user ilml -- npx -y @ilivemylife/graph-sdk"} />
            </div>
            <div className="ilml-dev-links">
                <a href="https://www.npmjs.com/package/@ilivemylife/graph-sdk" target="_blank" rel="noopener noreferrer">npm: @ilivemylife/graph-sdk →</a>
                <a href="https://www.npmjs.com/package/ilml-plugin-linkedin" target="_blank" rel="noopener noreferrer">Plugin: ilml-plugin-linkedin →</a>
            </div>

            {/* a contract = a node that runs itself */}
            <div className="ilml-contract">
                <div className="ilml-contract-head">
                    <span className="ilml-contract-dot" aria-hidden="true" />
                    A contract is a node that runs itself
                </div>
                <div className="ilml-contract-body">
                    <CopyBlock label="the node’s settings — JSON" code={
`{
  "contract": "weekly-digest",
  "trigger": "every monday 09:00",
  "scope": "node: My Projects"
}`} />
                    <CopyBlock label="…and its code — the SDK is already wired in" code={
`// runs inside the node: 'graph' is connected, 'node' is this node's id
export default async ({ graph, node }) => {
  const answer = await graph.askLifebot(node, 'Summarize my projects this week')
  await graph.addMessage(node, answer)   // → post into this node's chat
  // or spawn a child node:
  // await graph.addItem({ itemId: node, title: 'Weekly digest', description: answer })
}`} />
                </div>
                <p className="ilml-contract-cap">
                    Ask Lifebot to generate it, or create the contract-node by hand — it calls Lifebot,
                    waits for the answer, and writes it back as a new node or message.
                    {" "}<a href="/cloud-programming-interface">How node-contracts work →</a>
                </p>
            </div>
        </section>

        {/* ───────────── Differentiator ───────────── */}
        <section className="ilml-diff">
            <GraphConstellation />
            <div className="ilml-diff-inner">
                <h2 className="ilml-h2 ilml-h2-light">Anyone can wire Obsidian into an AI.<br />That’s where we start.</h2>
                <p className="ilml-diff-text">
                    You get the second-brain part — then everything a single-player note app can’t:
                    real collaboration, privacy with wallets hidden from AI, KYC trust, automation that
                    programs itself, and a 3D graph. A platform, not a plugin.
                </p>
                <div className="ilml-diff-chips">
                    <span>Collective</span><span>Private &amp; wallets</span><span>Programmable</span><span>3D graph</span><span>AI-native (MCP)</span>
                </div>
            </div>
        </section>

        {/* ───────────── Dive deeper (the slides) ───────────── */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Dive deeper</span>
                <h2 className="ilml-h2">Explore the vision, node by node.</h2>
            </div>
            <div className="ilml-deep-grid">
                {deepDives.map((d) => (
                    <a className="ilml-deep-link" href={d.path} key={d.path}>
                        <span className="ilml-deep-title">{d.title}</span>
                        <span className="ilml-deep-arrow" aria-hidden="true">→</span>
                    </a>
                ))}
            </div>
        </section>

        {/* ───────────── Membership ───────────── */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Choose yourself</span>
                <h2 className="ilml-h2">Start free. Grow into a builder.</h2>
            </div>
            <div className="ilml-tiers">
                {tiers.map((t) => (
                    <a className={`ilml-tier tier-${t.color}`} href={`${APP}/subscription${t.id}`}
                       target="_blank" rel="noopener noreferrer" key={t.name}>
                        <span className="ilml-tier-name">{t.name}</span>
                        <span className="ilml-tier-price">{t.price}</span>
                        <span className="ilml-tier-note">{t.note}</span>
                    </a>
                ))}
            </div>
            <div className="ilml-tiers-cta">
                <a className="ilml-btn ilml-btn-ghost" href="/membership">Compare memberships →</a>
            </div>
        </section>

        {/* ───────────── Final CTA (bookend: graph collapses to the root) ───────────── */}
        <section className="ilml-final">
            <GraphRoot />
            <h2 className="ilml-final-title">Your odyssey starts with <span className="ilml-grad-text">“My Life.”</span></h2>
            <p className="ilml-final-text">Build it with people. Build it with AI. Own it forever.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

/* ── Hero graph: root "My Life" + labeled satellites that narrate the product ── */
const NODES = [
    { x: 250, y: 230, r: 46, c: "blue",   label: "My Life", root: true },
    { x: 95,  y: 105, r: 26, c: "cyan",   label: "Projects" },
    { x: 415, y: 95,  r: 26, c: "teal",   label: "People", people: true },
    { x: 450, y: 305, r: 30, c: "orange", label: "Lifebot" },
    { x: 120, y: 360, r: 26, c: "maroon", label: "Contracts" },
    { x: 250, y: 40,  r: 16, c: "cyan" },
    { x: 40,  y: 235, r: 16, c: "teal" },
    { x: 300, y: 420, r: 14, c: "orange" },
];
const EDGES = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,5],[2,3],[4,6]];

const GraphHero = () => (
    <div className="ilml-graph-wrap">
        <svg className="ilml-graph" viewBox="0 0 500 460" role="img"
             aria-label="A central ‘My Life’ node connected to Projects, People, Lifebot and Contracts in a knowledge graph.">
            <defs>
                <radialGradient id="ilmlRoot" cx="50%" cy="38%" r="70%">
                    <stop offset="0%" stopColor="#5fb4ff" /><stop offset="100%" stopColor="#2697ff" />
                </radialGradient>
            </defs>
            <g className="ilml-graph-edges">
                {EDGES.map(([a, b], i) => (
                    <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
                          style={{ animationDelay: `${0.2 + i * 0.07}s` }} />
                ))}
            </g>
            <g className="ilml-graph-nodes">
                {NODES.map((n, i) => (
                    <g key={i} className="ilml-gnode" style={{ animationDelay: `${i * 0.1}s` }}>
                        <circle cx={n.x} cy={n.y} r={n.r} className={`gn-${n.c}`} style={n.root ? { fill: "url(#ilmlRoot)" } : undefined} />
                        {n.people && (
                            <g className="ilml-avatars">
                                <circle cx={n.x - 7} cy={n.y} r="5.5" /><circle cx={n.x + 7} cy={n.y} r="5.5" /><circle cx={n.x} cy={n.y - 8} r="5.5" />
                            </g>
                        )}
                        {n.root && <text x={n.x} y={n.y + 5} className="ilml-gnode-root">My Life</text>}
                        {n.label && !n.root && <text x={n.x} y={n.y + n.r + 17} className="ilml-gnode-label">{n.label}</text>}
                    </g>
                ))}
            </g>
        </svg>
    </div>
);

/* faint background constellation for the dark section */
const GraphConstellation = () => (
    <svg className="ilml-constellation" viewBox="0 0 500 460" aria-hidden="true">
        <g className="ilml-constellation-edges">{EDGES.map(([a, b], i) => (
            <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} />
        ))}</g>
        <g>{NODES.map((n, i) => <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.55} />)}</g>
    </svg>
);

/* final-CTA bookend: satellites converging into one glowing root */
const GraphRoot = () => (
    <svg className="ilml-graph-root" viewBox="0 0 240 120" aria-hidden="true">
        <g className="ilml-root-edges">
            <line x1="120" y1="60" x2="40" y2="28" /><line x1="120" y1="60" x2="200" y2="30" />
            <line x1="120" y1="60" x2="30" y2="92" /><line x1="120" y1="60" x2="210" y2="90" />
        </g>
        <circle cx="40" cy="28" r="5" className="gn-cyan" /><circle cx="200" cy="30" r="5" className="gn-teal" />
        <circle cx="30" cy="92" r="5" className="gn-maroon" /><circle cx="210" cy="90" r="5" className="gn-orange" />
        <circle cx="120" cy="60" r="18" className="ilml-root-core" />
    </svg>
);

export default Introduction;
