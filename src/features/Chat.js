import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const chat = [
    { who: "Ilya", c: "cyan", text: "Let’s ship the landing Friday." },
    { who: "Ruslan", c: "teal", text: "I’ll prep the deploy." },
    { who: "Ilya", c: "cyan", text: "@Lifebot — draft a deploy checklist in this node." },
    { who: "Lifebot", c: "blue", bot: true, text: "On it 👇" },
];

const Chat = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>Chat that becomes documentation — iLiveMyLife</title>
            <meta name="description" content="Every node has its own chat, where people and Lifebot AI talk together — invite teammates, discuss a project, upload documents, and build nodes right in the conversation. Discussion becomes documentation: decisions live in the node, not lost in a Slack scroll." />
            <link rel="canonical" href="https://www.ilivemylife.io/chat/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="Chat that becomes documentation — iLiveMyLife" />
            <meta property="og:description" content="Every node has a chat where people and AI build together — and the conversation becomes the documentation." />
            <meta property="og:url" content="https://www.ilivemylife.io/chat/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">Chat that becomes documentation</span>
                <h1 className="ilml-h1">Talk where the<br /><span className="ilml-grad-text">work lives.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    Every node has its own chat — people and Lifebot in the same room. The conversation
                    structures itself into your graph, so decisions live in the node, not in an endless scroll.
                </p>
            </div>
        </section>

        {/* chat mockup */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">People + AI, same room</span>
                <h2 className="ilml-h2">A chat that builds your graph.</h2>
            </div>
            <div className="ilml-chat">
                <div className="ilml-chat-head">
                    <span className="ilml-chat-node">▦ Launch</span>
                    <span className="ilml-chat-sub">node chat · you + 1 · Lifebot</span>
                    <span className="ilml-chat-assist">assist · on</span>
                </div>
                {chat.map((m, i) => (
                    <div className={`ilml-msg${m.bot ? " ilml-msg-bot" : ""}`} key={i}>
                        <span className={`ilml-msg-av gn-${m.c}`} aria-hidden="true">{m.who[0]}</span>
                        <div className="ilml-msg-body">
                            <span className="ilml-msg-who">{m.who}{m.bot && <em> · AI</em>}</span>
                            <span className="ilml-msg-text">{m.text}</span>
                        </div>
                    </div>
                ))}
                <div className="ilml-msg-confirm">
                    <span aria-hidden="true">✦</span> New node · <strong>Deploy checklist</strong> <em>+ 4 nodes inside</em> ↗
                </div>
            </div>
        </section>

        {/* assist mechanic */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">AI that knows its place</span>
                <h2 className="ilml-h2">Lifebot listens — it doesn’t barge in.</h2>
                <p className="ilml-section-sub">
                    Alone in a node, Lifebot is on by default. The moment someone joins, you flip
                    {" "}<code>assist</code> on yourself — and even then it only speaks when it’s useful, or
                    when you <code>@Lifebot</code> it directly. No assistant talking over your team.
                </p>
            </div>
        </section>

        {/* collaborate */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Like Slack — but it’s yours</span>
                <h2 className="ilml-h2">Invite, discuss, build — in one place.</h2>
                <p className="ilml-section-sub">Invite people into a node to run a project together. Upload documents, drop links, spin up sub-nodes — every “channel” is a node in a graph you actually own, and every message stays findable forever.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/lifebot-ai/">Meet Lifebot, in the chat →</a>
                <a href="/knowledge-graph/">How chat becomes the graph →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Stop losing <span className="ilml-grad-text">decisions.</span></h2>
            <p className="ilml-final-text">Where you talk is where it’s documented.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default Chat;
