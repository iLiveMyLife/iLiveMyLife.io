import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

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

const types = [
    { icon: "‹›", title: "Run your code", body: "sandboxed — runs JavaScript from any node you point at, with the graph SDK and the event injected." },
    { icon: "✦", title: "Ask Lifebot", body: "lifebot-prompt — hands the event to Lifebot with your prompt, and it decides and acts." },
    { icon: "↗", title: "Stream anywhere", body: "twitter / webhook + fetch — push a slice of your graph out to Slack, your own API, or the world when something changes; pull data back in." },
    { icon: "▤", title: "Log everything", body: "logger — stream every event into the node’s chat, for a full audit of what happened." },
];

const Automation = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Automation that programs itself — iLiveMyLife</title>
            <meta name="description" content="A contract is just a node: give it a {{webhook}} title and a little code, and it runs whenever data in its scope changes. Watch any node by reference, react with code or Lifebot, post anywhere — and when the code breaks, Lifebot reads the error, fixes it, and switches the contract back on." />
            <link rel="canonical" href="https://www.ilivemylife.io/automation/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Automation that programs itself — iLiveMyLife" />
            <meta property="og:description" content="Contracts: a node that runs on graph events — watch anything by reference, react with code or Lifebot, and self-heal when the code breaks." />
            <meta property="og:url" content="https://www.ilivemylife.io/automation/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Automation that programs itself</span>
                <h1 className="ilml-h1">Nodes that<br /><span className="ilml-grad-text">run themselves.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    A contract is just a node. Give it a <code>{'{{webhook}}'}</code> title and a little code,
                    and it runs whenever something in its scope changes — under your authorization.
                </p>
            </div>
        </section>

        {/* the contract */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The contract</span>
                <h2 className="ilml-h2">A node, plus a little code.</h2>
                <p className="ilml-section-sub">Name a node <code>{'{{webhook:…/contracts/sandboxed}}'}</code>, point its config at a code node, and it’s live — re-running on every change inside it.</p>
            </div>
            <div className="ilml-contract">
                <div className="ilml-contract-head">
                    <span className="ilml-contract-dot" aria-hidden="true" />
                    Contract node · tag <code>#contract</code>
                </div>
                <div className="ilml-contract-body">
                    <CopyBlock label="the contract node — title + config (description)" code={
`title:  {{webhook:…/contracts/sandboxed}}
config: { "codeNodeId": "<code node>",
          "nodeId":     "<where to post>" }`} />
                    <CopyBlock label="the code (any node, by id) — runs on each event" code={
`// injected: eventType, event, entityId, contractConfig, graph, fetch
if (eventType === 'ItemCreatedEvent') {
  const item = await graph.getItem(entityId)
  await graph.addMessage(contractConfig.nodeId,
    \`📋 New: \${item.title}\`, { lifebot: 'off' })   // off = just log
}`} />
                </div>
                <p className="ilml-contract-cap">
                    The code is just <strong>another node</strong> — pointed at by id, so keep your code and data
                    laid out across the project however you like (a node can be a task, a doc, a marker, or a program).
                    Keep it outside the watched branch so edits don’t re-trigger the contract — and it runs with
                    <strong> your</strong> permissions, touching your graph the way you can.
                </p>
            </div>
        </section>

        {/* watch by reference */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">How it fires</span>
                <h2 className="ilml-h2">Every change is an event.</h2>
                <p className="ilml-section-sub">Nothing is overwritten in place — each edit is an <strong>event</strong> that bubbles up the tree. The same events that build a node’s history also wake the contracts above it. So you never copy data in: drop a <strong>reference</strong> to what you care about — a project, a teammate, a whole branch — and its events flow up to your contract.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/event-sourcing/">How event-sourcing works →</a>
            </div>
        </section>

        {/* types */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">What it can do on a change</span>
                <h2 className="ilml-h2">Four kinds of contract.</h2>
            </div>
            <div className="ilml-grid ilml-grid-2x2">
                {types.map((t) => (
                    <div className="ilml-card accent-orange" key={t.title}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">{t.icon}</div>
                        <h3 className="ilml-card-title">{t.title}</h3>
                        <p className="ilml-card-body">{t.body}</p>
                    </div>
                ))}
            </div>
            <p className="ilml-contract-cap" style={{ textAlign: 'center', maxWidth: 640, margin: '20px auto 0' }}>
                Today contracts fire on <strong>events</strong> (created · edited · moved · messaged). On a fixed <strong>schedule</strong> — coming.
            </p>
        </section>

        {/* lifebot power */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The level of automation</span>
                <h2 className="ilml-h2">It can think — not just react.</h2>
                <p className="ilml-section-sub">Inside the code you can <strong>ask Lifebot</strong> — and it answers <strong>as you</strong>, reasoning and searching across your own graph. Then you act on what it found: <strong>file it</strong> where it belongs, <strong>stream it</strong> out to Slack or your API, or <strong>spin up</strong> a new node. Or post a plain-language instruction and let it carry that out too.</p>
            </div>
            <div className="ilml-contract">
                <div className="ilml-contract-head">
                    <span className="ilml-contract-dot" aria-hidden="true" />
                    Ask · get an answer · act on it
                </div>
                <div className="ilml-contract-body">
                    <CopyBlock label="ask Lifebot to reason over your graph — then act on the answer" code={
`// a new idea lands → Lifebot finds its home, you file it there
if (eventType === 'ItemCreatedEvent') {
  const idea = await graph.getItem(entityId)
  const r = await graph.askLifebot(contractConfig.nodeId,
    \`One line: which project does "\${idea.title}" belong to?\`)
  await graph.addItem(contractConfig.projectsId,
    { title: idea.title, description: r.content })
  // …or stream it out:  await fetch(contractConfig.slackUrl, …)
}`} />
                    <CopyBlock label="…or just tell it what to do — Lifebot on" code={
`// a message with Lifebot ON is an instruction it runs as you
await graph.addMessage(entityId,
  'The title holds a counter — set it to one higher.')`} />
                </div>
                <p className="ilml-contract-cap">
                    Tune it per node, per person: point Lifebot at one branch or your whole life,
                    and pick a <strong>cheap model</strong> for high-frequency automation or a <strong>smart</strong> one for the hard calls.
                </p>
            </div>
        </section>

        {/* lifebot builds it */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The easiest way in</span>
                <h2 className="ilml-h2">You don’t even write it.</h2>
                <p className="ilml-section-sub">Lifebot knows the contracts docs by heart — every event, every injected variable, the config shape. Ask in plain language and it assembles the whole thing: the contract node, the code node, the wiring — then switches it on.</p>
            </div>
            <div className="ilml-chat">
                <div className="ilml-chat-head">
                    <span className="ilml-chat-node">▦ Launch</span>
                    <span className="ilml-chat-sub">node chat · Lifebot</span>
                    <span className="ilml-chat-assist">assist · on</span>
                </div>
                <div className="ilml-msg">
                    <span className="ilml-msg-av gn-cyan" aria-hidden="true">Y</span>
                    <div className="ilml-msg-body">
                        <span className="ilml-msg-who">You</span>
                        <span className="ilml-msg-text">Set up a contract that pings me here whenever a task in this project is marked done.</span>
                    </div>
                </div>
                <div className="ilml-msg ilml-msg-bot">
                    <span className="ilml-msg-av gn-blue" aria-hidden="true">L</span>
                    <div className="ilml-msg-body">
                        <span className="ilml-msg-who">Lifebot<em> · AI</em></span>
                        <span className="ilml-msg-text">Done. I made a contract watching <strong>ItemUpdatedEvent</strong> for the ✅ marker, with a code node that posts back here — and switched it on.</span>
                    </div>
                </div>
                <div className="ilml-msg-confirm">
                    <span aria-hidden="true">✦</span> New contract · <strong>Launch · done-notifier</strong> <em>+ code node, wired &amp; live</em> ↗
                </div>
            </div>
        </section>

        {/* self-healing */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The part that feels like magic</span>
                <h2 className="ilml-h2">It repairs its own automation.</h2>
                <p className="ilml-section-sub">When the code breaks, the contract pauses and posts the error into its code node’s chat. If that node has <code>assist</code> on, <strong>Lifebot reads the error, fixes the code, and switches the contract back on</strong> — automation that heals itself.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/lifebot-ai/">How Lifebot acts →</a>
                <a href="/developers/">Build it with the SDK →</a>
            </div>
        </section>

        {/* automate in plain words */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">No code at all</span>
                <h2 className="ilml-h2">Or automate in plain words.</h2>
                <p className="ilml-section-sub">A node can simply <strong>be</strong> the bot. Write its job in the description, in plain language, switch on <code>assist</code> — and Lifebot runs it on every message, as you. Code when you want precision; words when you don’t.</p>
            </div>
            <div className="ilml-chat">
                <div className="ilml-chat-head">
                    <span className="ilml-chat-node">▦ Greeter</span>
                    <span className="ilml-chat-sub">description: “create a node named after each sender”</span>
                    <span className="ilml-chat-assist">assist · on</span>
                </div>
                <div className="ilml-msg">
                    <span className="ilml-msg-av gn-teal" aria-hidden="true">R</span>
                    <div className="ilml-msg-body">
                        <span className="ilml-msg-who">Ruslan</span>
                        <span className="ilml-msg-text">@Lifebot, do your thing.</span>
                    </div>
                </div>
                <div className="ilml-msg ilml-msg-bot">
                    <span className="ilml-msg-av gn-blue" aria-hidden="true">L</span>
                    <div className="ilml-msg-body">
                        <span className="ilml-msg-who">Lifebot<em> · AI</em></span>
                        <span className="ilml-msg-text">✓ Created node <strong>Ruslan</strong> here.</span>
                    </div>
                </div>
            </div>
            <p className="ilml-contract-cap" style={{ textAlign: 'center', maxWidth: 620, margin: '22px auto 0' }}>
                The behavior lives in the description — editable by anyone who can write a sentence, no deploy.
                And a code contract can post that trigger itself, so words and code compose.
            </p>
        </section>

        {/* what you can build — digital twins */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">What it’s really for</span>
                <h2 className="ilml-h2">Build a digital twin of almost anything.</h2>
                <p className="ilml-section-sub">A graph that mirrors something real — and keeps itself in sync — is a digital clone. The events are its heartbeat; the contracts are its reflexes; Lifebot is its judgment.</p>
            </div>
            <div className="ilml-grid ilml-grid-2x2">
                <div className="ilml-card accent-cyan">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">⌂</div>
                    <h3 className="ilml-card-title">A digital company</h3>
                    <p className="ilml-card-body">Departments, people and projects as nodes. Contracts route work, nudge owners, and roll up reports — the org runs itself while you replay its history.</p>
                </div>
                <div className="ilml-card accent-teal">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">⎈</div>
                    <h3 className="ilml-card-title">A robot or device</h3>
                    <p className="ilml-card-body">Its state is a set of nodes; every reading is an event streaming in. Contracts react in real time — a live twin you can replay, inspect, and drive.</p>
                </div>
                <div className="ilml-card accent-orange">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">∑</div>
                    <h3 className="ilml-card-title">An event-sourced ledger</h3>
                    <p className="ilml-card-body">Every transaction an immutable event. Contracts post balances, reconcile, and flag anomalies — books that can’t lose a number and explain themselves.</p>
                </div>
                <div className="ilml-card accent-maroon">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">✲</div>
                    <h3 className="ilml-card-title">A second brain</h3>
                    <p className="ilml-card-body">Your whole life as a graph that remembers everything, summarizes on demand, and quietly acts for you — the first digital twin worth having: you.</p>
                </div>
            </div>
            <div className="ilml-dev-links">
                <a href="/event-sourcing/">The event model →</a>
                <a href="/developers/">Build it with the SDK →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Let your graph <span className="ilml-grad-text">work for you.</span></h2>
            <p className="ilml-final-text">You set the intent. The nodes do the rest — and fix themselves.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Automation;
