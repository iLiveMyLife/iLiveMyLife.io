import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

// who can see a node, by tag × client
const cols = ["Teammate", "Your code · SDK/CLI", "Lifebot · AI/MCP", "Public"];
const matrix = [
    { node: "Shared node", tag: "", cells: ["sees it", "yes", "reads & assists", "if you shared"] },
    { node: "Private", tag: "private", cells: ["only if invited", "yes (your token)", "reads & assists", "must request access"] },
    { node: "Wallet", tag: "wallet", cells: ["hidden", "yes (your token)", "hidden from AI", "hidden"] },
];
// highlight the privacy-critical cells
const strong = { "2-2": true /* wallet × AI */, "2-0": true, "2-3": true };

const tags = [
    { accent: "maroon", t: "private", title: "Private", body: "The node asks for permission to enter. Teammates you haven’t invited just see a request-access prompt." },
    { accent: "cyan",   t: "wallet",  title: "Wallet", body: "Maximum privacy — hidden even from Lifebot and any MCP/SDK agent. This is where credentials and secrets live." },
    { accent: "teal",   t: "assist",  title: "Assist", body: "Turns Lifebot on inside the node, so the AI can answer and act there. Leave it off and the AI stays silent." },
    { accent: "orange", t: "kyc",     title: "KYC", body: "Marks a node for human verification — proving there’s a real person, not a bot, behind it." },
];

const Privacy = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Private, collective, yours — iLiveMyLife</title>
            <meta name="description" content="Share a node with your team or lock it down. Tags control exactly who sees what — across people, your code (SDK/CLI), and AI (Lifebot/MCP). Wallet nodes stay hidden even from the AI; KYC proves a real human is behind a node." />
            <link rel="canonical" href="https://www.ilivemylife.io/privacy/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Private, collective, yours — iLiveMyLife" />
            <meta property="og:description" content="Tags control exactly who sees what — people, your code, and the AI. Wallet nodes stay secret even from Lifebot." />
            <meta property="og:url" content="https://www.ilivemylife.io/privacy/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Private · collective · yours</span>
                <h1 className="ilml-h1">Share everything,<br /><span className="ilml-grad-text">or nothing.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    A few tags decide who can see a node — your teammates, your own code, and even the AI.
                    Some nodes stay secret from everyone but you.
                </p>
            </div>
        </section>

        {/* the matrix */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Who sees what</span>
                <h2 className="ilml-h2">One node, many viewers.</h2>
                <p className="ilml-section-sub">The same node looks different depending on who’s asking — a person, your scripts, or Lifebot.</p>
            </div>
            <div className="ilml-matrix-wrap">
                <table className="ilml-matrix">
                    <thead>
                        <tr><th></th>{cols.map((c) => <th key={c}>{c}</th>)}</tr>
                    </thead>
                    <tbody>
                        {matrix.map((r, ri) => (
                            <tr key={r.node}>
                                <th scope="row">{r.node}{r.tag && <code> {r.tag}</code>}</th>
                                {r.cells.map((cell, ci) => (
                                    <td key={ci} className={strong[`${ri}-${ci}`] ? "ilml-m-strong" : ""}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="ilml-matrix-note">Wallet nodes are invisible to Lifebot and any MCP/SDK agent — your secrets never reach the AI.</p>
        </section>

        {/* tags */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The tags that do it</span>
                <h2 className="ilml-h2">Behavior, not just labels.</h2>
            </div>
            <div className="ilml-grid">
                {tags.map((t) => (
                    <div className={`ilml-card accent-${t.accent}`} key={t.t}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">#</div>
                        <h3 className="ilml-card-title">{t.title} <code>{t.t}</code></h3>
                        <p className="ilml-card-body">{t.body}</p>
                    </div>
                ))}
            </div>
            <div className="ilml-dev-links">
                <a href="/tags/">See all tags &amp; how to add them →</a>
            </div>
        </section>

        {/* collective + KYC */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Collective &amp; trusted</span>
                <h2 className="ilml-h2">Build together — with real people.</h2>
                <p className="ilml-section-sub">Invite people into a node to run projects together, or keep it solo. And because anyone can verify as human via KYC, you always know whether a teammate is a person or a bot.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/developers/">Control access from the SDK / CLI →</a>
                <a href="/knowledge-graph/">How nodes &amp; tags work →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Your data. <span className="ilml-grad-text">Your rules.</span></h2>
            <p className="ilml-final-text">Open by choice, private by default where it counts.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Privacy;
