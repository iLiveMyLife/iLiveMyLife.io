import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const history = [
    { who: "You", what: "renamed “Landing” → “Launch”", when: "just now", c: "blue" },
    { who: "Lifebot", what: "added 3 tasks under “Launch”", when: "2h ago", c: "orange" },
    { who: "Ruslan", what: "moved node to “Marketing”", when: "yesterday", c: "teal" },
    { who: "You", what: "restored a deleted note", when: "Jun 24", c: "maroon" },
];

const structure = [
    { icon: "◷", title: "Markers", to: "/markers/", body: "Give any node a status — In work, Urgent, Needs clarification, Done — and track progress like a board." },
    { icon: "#", title: "Tags", to: "/tags/", body: "Tags change how a node behaves: private, wallet (hidden even from AI), KYC, AI-assist, colors and markers." },
    { icon: "↗", title: "References", to: "/references/", body: "The same node can live in many places at once — link it as a reference instead of copying." },
    { icon: "◫", title: "Rich content", to: "/rich-content/", body: "Text, files, images, checklists, due dates — and a chat — all attached to the node itself." },
];

const KnowledgeGraph = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>A living knowledge graph — iLiveMyLife</title>
            <meta name="description" content="In iLiveMyLife everything is a node — ideas, projects, people — connected into a living knowledge graph you reorganize together. Every change is kept: who changed what, and when, fully replayable. Markers, tags, references, and a 3D view." />
            <link rel="canonical" href="https://www.ilivemylife.io/knowledge-graph/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="A living knowledge graph — iLiveMyLife" />
            <meta property="og:description" content="Everything is a node, connected into a living graph. Reorganize together, and replay every change — who, what, when." />
            <meta property="og:url" content="https://www.ilivemylife.io/knowledge-graph/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">The living knowledge graph</span>
                <h1 className="ilml-h1">Everything is a node.<br /><span className="ilml-grad-text">Nothing gets lost.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    Ideas, projects and people become connected nodes — a graph you and your team
                    reshape together, with a full, replayable history of every change.
                </p>
                <div className="ilml-cta-row" style={{ justifyContent: 'center' }}>
                    <a className="ilml-btn ilml-btn-primary" href={`${APP}/signup`}>Start your graph — free →</a>
                </div>
            </div>
        </section>

        {/* node model */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">A graph, not folders</span>
                <h2 className="ilml-h2">Connect anything to anything.</h2>
                <p className="ilml-section-sub">Files and folders force one place for everything. A graph lets a node belong to many contexts at once — and lets meaning emerge from the connections.</p>
            </div>
        </section>

        {/* history — the star */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Replayable history</span>
                <h2 className="ilml-h2">Git for your knowledge.</h2>
                <p className="ilml-section-sub">Every edit is kept — who changed what, and when. Nothing is ever truly deleted; you can replay a node’s whole evolution and restore any past state.</p>
            </div>
            <div className="ilml-log">
                {history.map((h, i) => (
                    <div className="ilml-log-row" key={i}>
                        <span className={`ilml-log-dot gn-${h.c}`} aria-hidden="true" />
                        <span className="ilml-log-who">{h.who}</span>
                        <span className="ilml-log-what">{h.what}</span>
                        <span className="ilml-log-when">{h.when}</span>
                    </div>
                ))}
            </div>
            <div className="ilml-dev-links">
                <a href="/event-sourcing/">Why every change is an event →</a>
            </div>
        </section>

        {/* structure */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Structure that adapts</span>
                <h2 className="ilml-h2">More than text in a box.</h2>
            </div>
            <div className="ilml-grid">
                {structure.map((s) => (
                    <a className="ilml-card accent-cyan ilml-card-link" href={s.to} key={s.title}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">{s.icon}</div>
                        <h3 className="ilml-card-title">{s.title}</h3>
                        <p className="ilml-card-body">{s.body}</p>
                        <span className="ilml-card-more">Learn more →</span>
                    </a>
                ))}
            </div>
            <div className="ilml-dev-links">
                <a href="/tags/">The full tag reference →</a>
            </div>
        </section>

        {/* 3D */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">And in three dimensions</span>
                <h2 className="ilml-h2">Walk through your graph in 3D.</h2>
                <p className="ilml-section-sub">The same graph, explorable as an AR/VR 3D space — see clusters, distances and connections you’d never notice in a list.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/3d-graph-for-ilivemylife">See the 3D / AR / VR graph →</a>
                <a href="/developers/">Read &amp; write history with the SDK →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Your whole life, <span className="ilml-grad-text">connected.</span></h2>
            <p className="ilml-final-text">Start from one node — “My Life” — and grow the graph from there.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default KnowledgeGraph;
