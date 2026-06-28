import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const cards = [
    { accent: "cyan", icon: "≡", title: "Markdown everywhere", body: "Titles, descriptions and every messenger message render Markdown — headings, lists, code, links, all of it." },
    { accent: "teal", icon: "▤", title: "Files & links", body: "Drop a file into the title and it becomes a link to your own file store. Paste a URL and the system swaps it for a tidy icon." },
    { accent: "orange", icon: "▥", title: "Columns & drag-drop", body: "On desktop, open nodes side by side as columns — reorder, resize, and drag nodes between them, or drop one into a chat where it posts as a live link." },
    { accent: "blue", icon: "◳", title: "Three views, one node", body: "See the same node as a list (item), a full-screen Markdown doc (/document), or an interactive 3D graph (/graph)." },
];

const RichContent = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Rich content — a node holds anything — iLiveMyLife</title>
            <meta name="description" content="Every node holds rich content: Markdown in titles, descriptions and chat; files you upload into the title become links in your own file store; pasted URLs turn into icons. Open nodes as resizable columns and drag-drop between them, and view any node as a list, a Markdown document, or a 3D graph." />
            <link rel="canonical" href="https://www.ilivemylife.io/rich-content/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Rich content — a node holds anything — iLiveMyLife" />
            <meta property="og:description" content="Markdown, files, links, resizable columns with drag-drop, and three views of every node — list, document, and 3D graph." />
            <meta property="og:url" content="https://www.ilivemylife.io/rich-content/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Rich content</span>
                <h1 className="ilml-h1">A node holds<br /><span className="ilml-grad-text">anything.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    Not just text in a box — Markdown, files, links, columns, and three different ways to
                    look at the very same node.
                </p>
            </div>
        </section>

        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Inside a node</span>
                <h2 className="ilml-h2">Everything, in its place.</h2>
            </div>
            <div className="ilml-grid ilml-grid-2x2">
                {cards.map((c) => (
                    <div className={`ilml-card accent-${c.accent}`} key={c.title}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">{c.icon}</div>
                        <h3 className="ilml-card-title">{c.title}</h3>
                        <p className="ilml-card-body">{c.body}</p>
                    </div>
                ))}
            </div>
            <div className="ilml-dev-links">
                <a href="/references/">Link nodes instead of copying →</a>
                <a href="/knowledge-graph/">How nodes &amp; the graph work →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">One node. <span className="ilml-grad-text">Everything in it.</span></h2>
            <p className="ilml-final-text">Write, attach, arrange — your way.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default RichContent;
