import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const tags = [
    { t: "private", accent: "maroon", effect: "Gated. Teammates must request access before they can enter the node.", to: "/privacy/" },
    { t: "wallet", accent: "cyan", effect: "Secret — hidden even from Lifebot and any SDK/MCP agent. This is where credentials live.", to: "/privacy/" },
    { t: "assist", accent: "teal", effect: "Turns Lifebot on inside the node, so the AI can answer and act there.", to: "/lifebot-ai/" },
    { t: "kyc", accent: "orange", effect: "Marks the node for human verification — proving a real person is behind it.", to: "/privacy/" },
    { t: "#color", accent: "blue", effect: "Paints the node a color so it stands out across the graph and in lists." },
    { t: "#marker", accent: "blue", effect: "Gives the node a status from a marker list — like a column on a board.", to: "/markers/" },
];

const Tags = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Tags — behavior, not labels — iLiveMyLife</title>
            <meta name="description" content="In iLiveMyLife a tag changes what a node does and who can see it. private gates access, wallet hides a node even from the AI, assist turns on Lifebot, kyc marks human verification, and color/marker change how it looks and its status. Add a tag by editing the node — or let Lifebot do it." />
            <link rel="canonical" href="https://www.ilivemylife.io/tags/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Tags — behavior, not labels — iLiveMyLife" />
            <meta property="og:description" content="A tag changes what a node does and who can see it — private, wallet, assist, kyc, color, marker." />
            <meta property="og:url" content="https://www.ilivemylife.io/tags/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Tags</span>
                <h1 className="ilml-h1">Small tags,<br /><span className="ilml-grad-text">big behavior.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    A tag isn’t just a label. It changes what a node <em>does</em> and who can see it —
                    from privacy and AI access to status and color.
                </p>
            </div>
        </section>

        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The tags</span>
                <h2 className="ilml-h2">One word, one behavior.</h2>
            </div>
            <div className="ilml-grid">
                {tags.map((tg) => (
                    <div className={`ilml-card accent-${tg.accent}`} key={tg.t}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">#</div>
                        <h3 className="ilml-card-title"><code>{tg.t}</code></h3>
                        <p className="ilml-card-body">{tg.effect}</p>
                        {tg.to && <a className="ilml-card-more" href={tg.to}>Learn more →</a>}
                    </div>
                ))}
            </div>
        </section>

        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">How to add one</span>
                <h2 className="ilml-h2">Edit a node, add a tag.</h2>
                <p className="ilml-section-sub">Open a node, add a tag in its settings — that’s it. Lifebot can add them for you too (“make this private”, “turn on assist here”). Privacy tags decide exactly who sees what.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/privacy/">Who sees what — the access matrix →</a>
                <a href="/markers/">Build a status list with markers →</a>
                <a href="/developers/">Set tags from the SDK / CLI →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Your nodes, <span className="ilml-grad-text">your rules.</span></h2>
            <p className="ilml-final-text">A few tags, and a node knows how to behave.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Tags;
