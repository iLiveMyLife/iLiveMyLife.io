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

const triggers = [
    { icon: "◴", title: "On a schedule", body: "Every Monday at 9am, or every hour — the node wakes itself up and runs." },
    { icon: "↻", title: "On change", body: "React the moment something in the graph changes — a new child, an edited node, a fresh message." },
    { icon: "⚲", title: "On a webhook", body: "Fire from the outside world — a payment, a form, another service calls in." },
];

const Automation = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Automation that programs itself — iLiveMyLife</title>
            <meta name="description" content="Turn any node into a contract that runs itself: on a schedule, on change, or on a webhook. It calls your tools, asks Lifebot, decides, and can even spawn more automation to watch your projects — all under your authorization. Ask Lifebot to write it, or create the node by hand." />
            <link rel="canonical" href="https://www.ilivemylife.io/automation/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Automation that programs itself — iLiveMyLife" />
            <meta property="og:description" content="Any node can become a contract that runs itself — asks Lifebot, acts, and spawns more automation, under your authorization." />
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
                    Turn any node into a contract: it can call your tools, ask Lifebot, decide, and even
                    spawn more automation to watch your projects — always under your authorization.
                </p>
            </div>
        </section>

        {/* the contract */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The contract</span>
                <h2 className="ilml-h2">A node, plus a little code.</h2>
                <p className="ilml-section-sub">Give the node its settings, then a few lines that run on its trigger — the SDK is already wired in.</p>
            </div>
            <div className="ilml-contract">
                <div className="ilml-contract-head">
                    <span className="ilml-contract-dot" aria-hidden="true" />
                    Contract · weekly-digest
                </div>
                <div className="ilml-contract-body">
                    <CopyBlock label="settings — JSON" code={
`{
  "contract": "weekly-digest",
  "trigger": "every monday 09:00",
  "scope": "node: My Projects"
}`} />
                    <CopyBlock label="code — asks Lifebot, writes the result back" code={
`// runs inside the node: 'graph' is connected, 'node' is its own id
export default async ({ graph, node }) => {
  const answer = await graph.askLifebot(node, 'Summarize my projects this week')
  await graph.addMessage(node, answer)   // → post into this node's chat
  // it can even spawn more automation to watch a sub-project:
  // await graph.addItem({ itemId: node, title: 'Watcher', tags: ['contract'] })
}`} />
                </div>
            </div>
        </section>

        {/* triggers */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">When it runs</span>
                <h2 className="ilml-h2">Three ways to wake up.</h2>
            </div>
            <div className="ilml-grid ilml-grid-3">
                {triggers.map((t) => (
                    <div className="ilml-card accent-orange" key={t.title}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">{t.icon}</div>
                        <h3 className="ilml-card-title">{t.title}</h3>
                        <p className="ilml-card-body">{t.body}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* how to create */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Two ways to build one</span>
                <h2 className="ilml-h2">Ask the AI, or do it by hand.</h2>
                <p className="ilml-section-sub">Tell Lifebot what you want and let it write the contract, or create the contract-node yourself — the SDK is connected either way.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/cloud-programming-interface">How node-contracts work →</a>
                <a href="/developers/">Build it with the SDK / CLI →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Let your graph <span className="ilml-grad-text">work for you.</span></h2>
            <p className="ilml-final-text">You set the intent. The nodes do the rest.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Automation;
