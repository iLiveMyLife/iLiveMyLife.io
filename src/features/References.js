import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const APP = "https://app.ilivemylife.io";

const References = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>References — one node, many places — iLiveMyLife</title>
            <meta name="description" content="A node can live in many places at once. Reference it instead of copying — edit once, and it updates everywhere. Make a reference from the node’s settings menu, or just paste a node’s URL into the title of a new node and the system turns it into a reference automatically." />
            <link rel="canonical" href="https://www.ilivemylife.io/references/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="References — one node, many places — iLiveMyLife" />
            <meta property="og:description" content="Reference a node instead of copying it — edit once, updates everywhere. Or paste a node URL into a title to link it." />
            <meta property="og:url" content="https://www.ilivemylife.io/references/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/">← iLiveMyLife</a>
                <span className="ilml-eyebrow">References</span>
                <h1 className="ilml-h1">One node,<br /><span className="ilml-grad-text">many places.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    The same node can appear wherever it’s relevant — as a reference, not a copy. Edit it
                    once and every place updates, because it’s the same node.
                </p>
            </div>
        </section>

        {/* the paste-url trick */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">The shortcut nobody tells you</span>
                <h2 className="ilml-h2">Paste a link, get a reference.</h2>
                <p className="ilml-section-sub">Copy a node’s URL from the address bar or its menu, paste it into the <em>title</em> of a new node, and hit create. The system notices it’s a node URL and makes a live reference instead of plain text.</p>
            </div>
            <div className="ilml-term" style={{ maxWidth: 620 }}>
                <div className="ilml-term-bar"><span className="ilml-term-dots"><i /><i /><i /></span><span className="ilml-term-title">new node · title</span></div>
                <div className="ilml-term-body">
                    <div className="ilml-term-line"><span className="ilml-term-cmd"><span className="ilml-term-prompt">paste </span>https://app.ilivemylife.io/item/0000…</span></div>
                    <div className="ilml-term-line"><span className="ilml-term-desc"># → becomes a reference to that node, not text</span></div>
                </div>
            </div>
        </section>

        {/* the menu way */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Or from the menu</span>
                <h2 className="ilml-h2">Reference, both directions.</h2>
                <p className="ilml-section-sub">From a node’s settings menu you can drop a reference to it somewhere else in your tree — or pull a node from elsewhere and place a reference to it right here. Same node, two homes.</p>
            </div>
            <div className="ilml-dev-links">
                <a href="/knowledge-graph/">Why a graph beats folders →</a>
                <a href="/developers/">Create references with the SDK (refId) →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Link it, don’t <span className="ilml-grad-text">copy it.</span></h2>
            <p className="ilml-final-text">One source of truth, everywhere you need it.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={`${APP}/signup`}>Start your graph →</a>
        </section>
    </div>
);

export default References;
