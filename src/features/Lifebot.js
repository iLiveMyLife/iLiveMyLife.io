import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const does = [
    { icon: "✦", title: "Answers in context", body: "Ask inside any node and Lifebot answers knowing that node — its chat, children and the scope you allow." },
    { icon: "⌕", title: "Searches your graph", body: "“Where did we decide the pricing?” — it finds the node and the message, across everything you’ve shared with it." },
    { icon: "+", title: "Creates & edits nodes", body: "Tell it what you need and it can add tasks, restructure a project, or write a node — with your say-so." },
    { icon: "⚙", title: "Runs on its own", body: "Wired into a contract, Lifebot acts on a trigger — summarizing, drafting, watching — not just replying." },
    { icon: "‹›", title: "Stays silent until asked", body: "It won’t butt into every chat. Mention it, or turn it off per message — you decide when it speaks." },
    { icon: "▦", title: "Respects your secrets", body: "Wallet nodes are invisible to it. Lifebot never sees what you’ve marked private to yourself." },
];

const Lifebot = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Lifebot — your AI, in context — iLiveMyLife</title>
            <meta name="description" content="Lifebot is an AI that actually knows your world. Ask it inside any node; it answers in context, searches your graph, creates and edits nodes, and can run on its own as a contract. You control how far it looks — this project only, or your whole life — and wallet nodes stay hidden from it." />
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
                    Lifebot lives inside your graph. Ask it in any node and it answers in context — and you
                    decide how far it looks: this project only, or your whole life.
                </p>
            </div>
        </section>

        {/* scope */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">You set the lens</span>
                <h2 className="ilml-h2">As narrow, or as wide, as you want.</h2>
                <p className="ilml-section-sub">Point Lifebot at a single node for a focused answer, or open it up to your whole graph for the big picture. The context is yours to widen or shut.</p>
            </div>
        </section>

        {/* what it does */}
        <section className="ilml-section ilml-section-alt">
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

        {/* per-node brain */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Tunable per node</span>
                <h2 className="ilml-h2">Pick its brain, node by node.</h2>
                <p className="ilml-section-sub">Switch the AI provider or turn on a smarter model for the nodes that need it — and leave the rest light and cheap.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/developers/">Call Lifebot from the SDK / CLI →</a>
                <a href="/automation/">Put Lifebot inside a contract →</a>
                <a href="/privacy/">How it respects wallet nodes →</a>
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
