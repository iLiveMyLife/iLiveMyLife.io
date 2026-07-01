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

const stream = [
    { ev: "ItemCreatedEvent", who: "You", what: "created “Deploy checklist”", when: "just now", c: "blue" },
    { ev: "ItemUpdatedEvent", who: "Ruslan", what: "marked “Ship v1” ✅ Done", when: "2m ago", c: "teal" },
    { ev: "MessageCreatedEvent", who: "Lifebot", what: "posted the weekly summary", when: "2m ago", c: "orange" },
    { ev: "ItemMovedInEvent", who: "You", what: "moved “Idea” → “Backlog”", when: "1h ago", c: "maroon" },
];

const eventTypes = [
    "ItemCreatedEvent", "ItemUpdatedEvent", "ItemArchivedEvent",
    "ItemMovedOutEvent", "ItemMovedInEvent",
    "MessageCreatedEvent", "MessageUpdatedEvent", "MessageArchivedEvent",
];

const Events = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Everything is an event — iLiveMyLife</title>
            <meta name="description" content="iLiveMyLife is event-sourced: nothing is overwritten in place. Every change is a command that appends an event, and the current state is the replay of all events. One stream of events powers two things at once — a node's full, replayable history, and the contracts watching above it. Events flow up the tree, so a reference subscribes any branch." />
            <link rel="canonical" href="https://www.ilivemylife.io/event-sourcing/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Everything is an event — iLiveMyLife" />
            <meta property="og:description" content="Event-sourced like a ledger: every change is an event. One stream feeds both a node's replayable history and the contracts watching above it." />
            <meta property="og:url" content="https://www.ilivemylife.io/event-sourcing/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">The model underneath</span>
                <h1 className="ilml-h1">Everything is<br /><span className="ilml-grad-text">an event.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    Nothing in your graph is overwritten in place. Every change is a command that
                    appends an event — and the present is simply the replay of everything that happened.
                </p>
            </div>
        </section>

        {/* the ledger idea */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Commands, not edits</span>
                <h2 className="ilml-h2">A ledger for your knowledge.</h2>
                <p className="ilml-section-sub">Like a blockchain keeps a chain of transactions rather than a mutable balance, your graph keeps a chain of events rather than a mutable state. Rename a node, move it, send a message — each becomes an immutable event. The node you see is those events, replayed.</p>
            </div>
            <div className="ilml-log">
                {stream.map((h, i) => (
                    <div className="ilml-log-row" key={i}>
                        <span className={`ilml-log-dot gn-${h.c}`} aria-hidden="true" />
                        <span className="ilml-log-who">{h.who}</span>
                        <span className="ilml-log-what"><code className="ilml-ev">{h.ev}</code> {h.what}</span>
                        <span className="ilml-log-when">{h.when}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* one stream, two powers */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">One stream, two powers</span>
                <h2 className="ilml-h2">The same events do double duty.</h2>
                <p className="ilml-section-sub">There’s a single source of truth — the event stream. It powers two things at once.</p>
            </div>
            <div className="ilml-grid ilml-grid-2x2">
                <a className="ilml-card accent-cyan ilml-card-link" href="/knowledge-graph/">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">⟲</div>
                    <h3 className="ilml-card-title">Replayable history</h3>
                    <p className="ilml-card-body">Read the events forward and you get a node’s whole story — who changed what, when — and can restore any past state. Nothing is ever truly lost.</p>
                    <span className="ilml-card-more">See the history →</span>
                </a>
                <a className="ilml-card accent-orange ilml-card-link" href="/automation/">
                    <div className="ilml-card-icon ilml-glyph" aria-hidden="true">⚡</div>
                    <h3 className="ilml-card-title">Live automation</h3>
                    <p className="ilml-card-body">Hand the very same events to a contract and your graph reacts in real time — notify, summarize, sync, or run code. History and automation, one stream.</p>
                    <span className="ilml-card-more">See contracts →</span>
                </a>
            </div>
        </section>

        {/* propagation */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">How it travels</span>
                <h2 className="ilml-h2">Events flow up the tree.</h2>
                <p className="ilml-section-sub">An event doesn’t just sit on the node it happened to — it bubbles upward through every parent. So you subscribe to anything just by placing a <strong>reference</strong> above it: the events of a whole branch — a project, a person, a team — flow up to your reference and into whatever is listening there.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/automation/">Watch a branch with a contract →</a>
            </div>
        </section>

        {/* the real events */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Concrete, not abstract</span>
                <h2 className="ilml-h2">The events themselves.</h2>
                <p className="ilml-section-sub">A small, well-defined set — every one carries who did it and when, down to the millisecond.</p>
            </div>
            <div className="ilml-chips">
                {eventTypes.map((e) => (
                    <span className="ilml-chip" key={e}><code className="ilml-ev">{e}</code></span>
                ))}
            </div>
            <div className="ilml-contract" style={{ marginTop: 30 }}>
                <div className="ilml-contract-head">
                    <span className="ilml-contract-dot" aria-hidden="true" />
                    One event, as your code receives it
                </div>
                <div className="ilml-contract-body">
                    <CopyBlock label="ItemUpdatedEvent — a task flipped to Done" code={
`eventType  = 'ItemUpdatedEvent'
event.toItemDetails.title    // "Ship v1"
event.toItemDetails.tags     // [ '#marker#…done' ]
event.updatedByDisplayName   // "Ruslan"
event.updated.when.inMilli   // 1782861612367`} />
                </div>
                <p className="ilml-contract-cap">
                    This is exactly what a <a href="/automation/">contract</a> sees on every change — and exactly what
                    the <a href="/knowledge-graph/">history</a> replays. One shape, two uses.
                </p>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">A graph that <span className="ilml-grad-text">never forgets.</span></h2>
            <p className="ilml-final-text">Every change recorded, replayable, and ready to act on.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Events;
