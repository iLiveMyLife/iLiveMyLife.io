import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const SDK_NPM = "https://www.npmjs.com/package/@ilivemylife/graph-sdk";
const PLUGIN_NPM = "https://www.npmjs.com/package/ilml-plugin-linkedin";

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

const asks = [
    "Read my latest notifications and summarize what needs my attention.",
    "What changed in my “Projects” node this week — and who changed it?",
    "Create a task “Call the bank” under My Life, due tomorrow.",
    "Search my whole graph for everything about the landing redesign.",
];

const sdkExamples = [
    { label: "Read your graph", code:
`const me = await graph.me()
const items = await graph.items(me.rootItemId)
console.log(items[0].title, '→', items.slice(1).map(i => i.title))` },
    { label: "Create nodes", code:
`const project = await graph.addItem(me.rootItemId, { title: 'My Project' })
await graph.addItem(project.id, { title: 'First task' })` },
    { label: "Ask Lifebot — AI that knows the node (needs the 'assist' tag)", code:
`const reply = await graph.askLifebot(project.id, 'What tasks do I have?')
console.log(reply.content)` },
    { label: "Replayable change history — who, what, when", code:
`const history = await graph.itemHistory(project.id)
// every edit on the node: who made it, what changed, and when` },
    { label: "Upload a document, search the chat", code:
`await graph.uploadFile(project.id, './spec.pdf')
const hits = await graph.searchMessages(project.id, 'deadline')` },
];

const Developers = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>iLiveMyLife for developers — SDK, CLI &amp; MCP</title>
            <meta name="description" content="Script your iLiveMyLife knowledge graph from the command line, or let Claude, Cursor and Windsurf work inside it through MCP. Install the open SDK + CLI, read and write nodes, ask Lifebot, replay change history, build plugins." />
            <link rel="canonical" href="https://www.ilivemylife.io/developers/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="iLiveMyLife for developers — SDK, CLI & MCP" />
            <meta property="og:description" content="Open SDK, CLI and MCP server for the iLiveMyLife knowledge graph. Script your graph, or let your AI work inside it." />
            <meta property="og:url" content="https://www.ilivemylife.io/developers/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        {/* hero */}
        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">For developers · SDK · CLI · MCP</span>
                <h1 className="ilml-h1">Your graph — from the command line,<br /><span className="ilml-grad-text">and from your AI.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    One open package gives you a TypeScript SDK, the <code>ilml</code> CLI, and an MCP server —
                    so you can script your graph, or let Claude, Cursor and Windsurf work inside it directly.
                </p>
                <div className="ilml-dev-links">
                    <a href={SDK_NPM} target="_blank" rel="noopener noreferrer">npm: @ilivemylife/graph-sdk →</a>
                    <a href={PLUGIN_NPM} target="_blank" rel="noopener noreferrer">Plugin: ilml-plugin-linkedin →</a>
                </div>
            </div>
        </section>

        {/* step 1 — install */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">First · Install</span>
                <h2 className="ilml-h2">One package — CLI, SDK and MCP.</h2>
                <p className="ilml-section-sub">Node 18+. One global install gives you the <code>ilml</code> command and the SDK.</p>
            </div>
            <div className="ilml-dev ilml-dev-1">
                <CopyBlock label="install &amp; sign in" code={"npm install -g @ilivemylife/graph-sdk\nilml login\nilml doctor   # verify everything works"} />
            </div>
        </section>

        {/* the CLI */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">In your terminal · CLI</span>
                <h2 className="ilml-h2">Drive your graph with <code>ilml</code>.</h2>
                <p className="ilml-section-sub">The same install gives you a full command set — read, write, ask Lifebot, replay history, attach files, add plugins.</p>
            </div>
            <div className="ilml-dev ilml-dev-1">
                <CopyBlock label="common commands" code={
`ilml tree                              # your whole graph as a tree
ilml items <nodeId>                    # a node and its children
ilml ask <nodeId> "what's left here?"  # ask Lifebot inside a node
ilml search <nodeId> "deadline"        # search a node's chat
ilml itemHistory <nodeId>              # who changed what, and when
ilml upload <nodeId> ./spec.pdf        # attach a file
ilml plugin install linkedin           # add the LinkedIn plugin`} />
            </div>
        </section>

        {/* step 2 — MCP */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">In your AI · MCP</span>
                <h2 className="ilml-h2">Plug your graph into your AI.</h2>
                <p className="ilml-section-sub">One command connects the MCP server to Claude Code (Cursor, Windsurf and Claude Desktop are the same idea).</p>
            </div>
            <div className="ilml-dev ilml-dev-1">
                <CopyBlock label="Claude Code — available in every project" code={"claude mcp add --scope user ilml -- npx -y @ilivemylife/graph-sdk"} />
            </div>
            <p className="ilml-ask-lead">Then just ask, in plain language:</p>
            <ul className="ilml-ask-list">
                {asks.map((a) => (
                    <li key={a}><span className="ilml-ask-q" aria-hidden="true">“</span>{a}<span className="ilml-ask-q" aria-hidden="true">”</span></li>
                ))}
            </ul>
        </section>

        {/* step 3 — SDK */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">In your code · SDK</span>
                <h2 className="ilml-h2">Or script it yourself.</h2>
                <p className="ilml-section-sub">Typed TypeScript SDK (ESM + CommonJS): read and write nodes, ask Lifebot, upload files, replay every change, subscribe to live updates.</p>
            </div>
            <div className="ilml-dev ilml-dev-3">
                {sdkExamples.map((e) => <CopyBlock key={e.label} label={e.label} code={e.code} />)}
            </div>
            <div className="ilml-dev-links">
                <a href={SDK_NPM} target="_blank" rel="noopener noreferrer">11 runnable examples + full API on npm →</a>
            </div>
        </section>

        {/* plugins */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Extend it · Plugins</span>
                <h2 className="ilml-h2">Install a plugin — or build your own.</h2>
                <p className="ilml-section-sub">
                    Plugins install into your <code>ilml</code> CLI as packages. The LinkedIn plugin is the
                    reference: it keeps a local mirror of your LinkedIn data and runs AI-assisted workflows
                    under your direction — and doubles as the template for authoring your own.
                </p>
            </div>
            <div className="ilml-dev ilml-dev-1">
                <CopyBlock label="install one / build your own" code={
`ilml plugin install linkedin     # from npm:ilml-plugin-linkedin
ilml plugin list                 # what's installed
ilml linkedin <command>          # run a plugin command
# author one → see examples/plugin-author.mjs in the SDK`} />
            </div>
            <div className="ilml-dev-links">
                <a href={PLUGIN_NPM} target="_blank" rel="noopener noreferrer">npm: ilml-plugin-linkedin →</a>
                <a href={SDK_NPM} target="_blank" rel="noopener noreferrer">Plugin-authoring example on npm →</a>
            </div>
        </section>

        {/* final */}
        <section className="ilml-final">
            <h2 className="ilml-final-title">Build on your <span className="ilml-grad-text">graph.</span></h2>
            <p className="ilml-final-text">Your data, your code, your AI — all on one open graph.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href="https://app.ilivemylife.io/signup">Start your graph →</a>
        </section>
    </div>
);

export default Developers;
