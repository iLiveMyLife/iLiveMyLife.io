import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const does = [
    { icon: "✦", title: "Answers in context", body: "Ask inside any node and Lifebot answers knowing that node — its chat, children and the scope you allow." },
    { icon: "⌕", title: "Searches your graph", body: "“Where did we decide the pricing?” — it finds the node and the message, across everything you’ve shared with it." },
    { icon: "+", title: "Creates & edits nodes", body: "Tell it what you need and it adds tasks, builds a whole sub-project in one go, or drops a reference link — with your say-so." },
    { icon: "⚙", title: "Runs on its own", body: "Wired into a contract, Lifebot acts on a trigger — summarizing, drafting, watching — not just replying." },
    { icon: "‹›", title: "Stays silent until asked", body: "It won’t butt into every chat. Mention it, or turn it off per message — you decide when it speaks." },
    { icon: "▦", title: "Respects your secrets", body: "Wallet nodes are invisible to it. Lifebot never sees what you’ve marked private to yourself." },
];

const Lifebot = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Lifebot — your AI, in context — iLiveMyLife</title>
            <meta name="description" content="Lifebot is an AI that actually knows your world. Ask it inside any node; it answers in context, searches your graph, creates and edits nodes, and can run on its own as a contract. It's also your automation co-pilot: it builds contracts for you (code or prompt), points them at the data to watch, and iterates on the code it wrote when it breaks. You control how far it looks — this project only, or your whole life — and wallet nodes stay hidden from it." />
            <link rel="canonical" href="https://www.ilivemylife.io/lifebot-ai/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Lifebot — your AI, in context — iLiveMyLife" />
            <meta property="og:description" content="An AI that knows your world: answers in context, searches your graph, creates nodes, and runs on its own — under your control." />
            <meta property="og:url" content="https://www.ilivemylife.io/lifebot-ai/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Lifebot · your AI, in context</span>
                <h1 className="ilml-h1">An AI that actually<br /><span className="ilml-grad-text">knows your world.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    Lifebot lives inside your graph — the AI behind your chats, your search and your automation.
                    Ask it in any node and it answers in context, acts with your say-so, and runs on the model you pick.
                </p>
            </div>
        </section>

        {/* what it does */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">What Lifebot does</span>
                <h2 className="ilml-h2">More than a chatbot.</h2>
            </div>
            <div className="ilml-grid">
                {does.map((d) => (
                    <div className="ilml-card accent-blue" key={d.title}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">{d.icon}</div>
                        <h3 className="ilml-card-title">{d.title}</h3>
                        <p className="ilml-card-body">{d.body}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* models */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Runs on the model you choose</span>
                <h2 className="ilml-h2">Four providers. A fast one and a smart one each.</h2>
                <p className="ilml-section-sub">Lifebot isn’t tied to one vendor. Set a default for the whole app, override it on any node — and flip <strong>intelligence</strong> on where it matters: a fast, cheap model for everyday automation, the flagship model for the hard calls.</p>
            </div>
            <div className="ilml-grid ilml-grid-2x2">
                <div className="ilml-card accent-blue">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">✦</div>
                    <h3 className="ilml-card-title">Claude</h3>
                    <p className="ilml-card-body">Haiku for speed, Sonnet for the hard calls.</p>
                </div>
                <div className="ilml-card accent-teal">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">◇</div>
                    <h3 className="ilml-card-title">OpenAI</h3>
                    <p className="ilml-card-body">A fast GPT for volume, the flagship GPT for depth.</p>
                </div>
                <div className="ilml-card accent-orange">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">◐</div>
                    <h3 className="ilml-card-title">Gemini</h3>
                    <p className="ilml-card-body">Flash for speed, Pro for depth.</p>
                </div>
                <div className="ilml-card accent-maroon">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">⚙</div>
                    <h3 className="ilml-card-title">DeepSeek</h3>
                    <p className="ilml-card-body">An open, low-cost pair — flash and pro.</p>
                </div>
            </div>
            <p className="ilml-contract-cap" style={{ textAlign: 'center', maxWidth: 660, margin: '20px auto 0' }}>
                Four providers, each with a fast and a smart tier — and any new OpenAI-compatible model (Kimi, Groq, Together…) drops in with a single line. A little <strong>intelligence</strong> indicator shows which tier a node is on.
            </p>
        </section>

        {/* per-node brain */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Tunable per node, per person</span>
                <h2 className="ilml-h2">Pick its brain — and its reach.</h2>
                <p className="ilml-section-sub">On any node you can override the app-wide default: choose the <strong>provider</strong> (Claude, OpenAI, Gemini, DeepSeek — or any OpenAI-compatible model), turn on a <strong>smarter model</strong> where it matters and leave the rest light and cheap, and set how far it may <strong>look</strong> — just this node, out across your graph, or never into your private data. For a shared or sensitive node, keep it to exactly what’s inside.</p>
            </div>
            <div className="ilml-callout">
                <span className="ilml-callout-tag">Yours</span>
                <p>
                    <b>Per person, not per node.</b> Because Lifebot runs on the token of whoever asked, each
                    teammate sets their own model and reach — and it reasons over <em>their</em> tree and replies to{" "}
                    <em>them</em>. Your settings and your data never cross into someone else’s.
                </p>
            </div>
            <div className="ilml-dev-links">
                <a href="/developers/">Set it from the SDK / CLI (editSettings) →</a>
                <a href="/automation/">Put Lifebot inside a contract →</a>
                <a href="/privacy/">How it respects wallet nodes →</a>
            </div>
        </section>

        {/* automation co-pilot */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Your automation co-pilot</span>
                <h2 className="ilml-h2">It writes your automation — and fixes it.</h2>
                <p className="ilml-section-sub">Lifebot knows how contracts work — the events, the injected variables, the syntax. Describe what you want and it builds the whole thing: the contract node, a reference to the data to watch, and the code (or a plain-language prompt) in a node it creates. When that code breaks, it reads the error, iterates, and switches the contract back on.</p>
            </div>
            <div className="ilml-grid ilml-grid-2x2">
                <div className="ilml-card accent-orange">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">✎</div>
                    <h3 className="ilml-card-title">Builds the contract</h3>
                    <p className="ilml-card-body">Code or prompt — Lifebot creates the contract node, the code node, and wires the config, from a single sentence.</p>
                </div>
                <div className="ilml-card accent-cyan">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">↗</div>
                    <h3 className="ilml-card-title">Points it at your data</h3>
                    <p className="ilml-card-body">It drops a reference to the exact nodes you want watched or analyzed, so their events flow up and trigger the contract.</p>
                </div>
                <div className="ilml-card accent-teal">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">⟲</div>
                    <h3 className="ilml-card-title">Iterates on the code</h3>
                    <p className="ilml-card-body">Reads the error posted to the code node, rewrites the code, verifies, and re-enables it — a self-healing loop.</p>
                </div>
                <div className="ilml-card accent-maroon">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">‹›</div>
                    <h3 className="ilml-card-title">Knows the syntax</h3>
                    <p className="ilml-card-body">Ask it anything about contracts — which events fire, what’s injected, how to call the SDK — it has the docs by heart.</p>
                </div>
            </div>
            <div className="ilml-dev-links">
                <a href="/automation/">How contracts work →</a>
                <a href="/event-sourcing/">The event model →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Your second brain, <span className="ilml-grad-text">awake.</span></h2>
            <p className="ilml-final-text">It remembers, it searches, it acts — in your context.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Meet Lifebot — free →</a>
        </section>
    </div>
);

export default Lifebot;
