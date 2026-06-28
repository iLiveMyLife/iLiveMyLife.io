import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const statuses = [
    { icon: "🕑", name: "In work" },
    { icon: "❕", name: "Urgent" },
    { icon: "❔", name: "Needs clarification" },
    { icon: "☑️", name: "Completed" },
    { icon: "❎", name: "Closed" },
    { icon: "ℹ️", name: "Info" },
];

const steps = [
    { n: "1", title: "Build a status list", body: "Create a node like “My Markers” and add a child node for each status — its icon and name go in the title, an optional note in the description." },
    { n: "2", title: "Attach it to a parent", body: "Open the parent node’s settings and point it at your marker list. Now its children can carry a status from that list." },
    { n: "3", title: "Set a status", body: "On any child, pick a status from the list — and the whole node list reads like a board." },
];

const Markers = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Markers — your own status board — iLiveMyLife</title>
            <meta name="description" content="Markers are statuses you design yourself. Build a status list as child nodes (icon + name in the title), attach it to a parent node in its settings, and give each child a status — so a node list reads like a board. Or just ask Lifebot to set it up." />
            <link rel="canonical" href="https://www.ilivemylife.io/markers/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Markers — your own status board — iLiveMyLife" />
            <meta property="og:description" content="Statuses you design yourself: build a marker list, attach it to a node, and your child nodes read like a board." />
            <meta property="og:url" content="https://www.ilivemylife.io/markers/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Markers</span>
                <h1 className="ilml-h1">Your own<br /><span className="ilml-grad-text">status board.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    A marker is a status you give a node — from a list you design yourself. No fixed
                    “task” type; you decide what the statuses mean.
                </p>
                <div className="ilml-chips">
                    {statuses.map((s) => <span className="ilml-chip" key={s.name}><span aria-hidden="true">{s.icon}</span> {s.name}</span>)}
                </div>
            </div>
        </section>

        {/* how */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">How to set them up</span>
                <h2 className="ilml-h2">Three steps — once.</h2>
            </div>
            <div className="ilml-steps">
                {steps.map((s) => (
                    <div className="ilml-step" key={s.n}>
                        <span className="ilml-step-n">{s.n}</span>
                        <div>
                            <h3 className="ilml-step-title">{s.title}</h3>
                            <p className="ilml-step-body">{s.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* lifebot */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Or skip the setup</span>
                <h2 className="ilml-h2">Ask Lifebot to build it.</h2>
                <p className="ilml-section-sub">“Make me a pipeline with To do, Doing, Done” — Lifebot creates the marker list and wires it to your node. Markers are just nodes, so the AI can build them like anything else.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/tags/">Markers, tags &amp; the rest →</a>
                <a href="/lifebot-ai/">What else Lifebot can do →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Track anything, <span className="ilml-grad-text">your way.</span></h2>
            <p className="ilml-final-text">Your statuses, your board, your graph.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Markers;
