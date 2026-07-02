import React from 'react';
import '../introduction/Introduction.css';
import './Features.css';
import { Helmet } from 'react-helmet';

const SDK_NPM = "https://www.npmjs.com/package/@ilivemylife/graph-sdk";
const PLUGIN_NPM = "https://www.npmjs.com/package/ilml-plugin-linkedin";

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

/* every capability maps to a real `ilml linkedin` command (v1.13.1) */
const capabilities = [
    { accent: "accent-cyan", icon: "⇩", title: "A local copy you own", body: "sync pulls your LinkedIn inbox and contacts into a local database on your machine. Work offline, keep your own history — your data stays yours." },
    { accent: "accent-teal", icon: "◷", title: "A daily plan — no browser", body: "today reads the synced data and tells you who to reply to and what to do next, prioritized. report prints inbox stats. No LinkedIn tab open." },
    { accent: "accent-blue", icon: "✎", title: "Reply with your AI", body: "messages runs a draft → review → send loop: your AI writes the replies, you approve, it sends. enrich classifies every thread — recruiter, HM, founder, coach…" },
    { accent: "accent-orange", icon: "⇉", title: "Find & reach the right people", body: "warm-scan finds your 1st-degree connections at target companies; funnel builds a connection-request queue for recruiters / founders / investors." },
    { accent: "accent-maroon", icon: "⌕", title: "Show up & get seen", body: "visit walks a queue of profiles so you appear in their “who viewed your profile”; viewers pulls that list back so you can act on it." },
    { accent: "accent-cyan", icon: "⚡", title: "Jobs — scored, then applied", body: "scout scans jobs from your search URLs and scores them; apply and apply-queue auto-apply to the Easy Apply roles at the top of the list." },
];

const cliGroups = [
    { group: "Set up (once)", items: [
        ["ilml plugin install linkedin", "add the plugin from npm"],
        ["ilml linkedin login", "open a browser, log in, save cookies"],
        ["ilml plugin config linkedin", "your search URLs & defaults"],
    ]},
    { group: "Every day", items: [
        ["ilml linkedin sync", "pull new inbox threads into the local DB"],
        ["ilml linkedin today", "your prioritized action plan — no browser"],
        ["ilml linkedin report", "inbox stats & last-session summary"],
    ]},
    { group: "People & outreach", items: [
        ["ilml linkedin enrich", "classify every contact & conversation"],
        ["ilml linkedin warm-scan", "1st-degree connections at target companies"],
        ["ilml linkedin funnel", "connection-request queue (recruiters / founders…)"],
        ["ilml linkedin visit", "appear in their “who viewed your profile”"],
        ["ilml linkedin viewers", "pull who viewed your profile"],
    ]},
    { group: "Messages & jobs", items: [
        ["ilml linkedin messages", "AI drafts replies → you review → send"],
        ["ilml linkedin scout", "score jobs from your search URLs"],
        ["ilml linkedin apply", "auto-apply to Easy Apply roles"],
        ["ilml linkedin daily", "the full pipeline, in one command"],
    ]},
];

const LinkedIn = () => (
    <div className="ilml-landing">
        <Helmet>
            <title>LinkedIn, as data you own — the ilml plugin</title>
            <meta name="description" content="The ilml-plugin-linkedin keeps a local mirror of your LinkedIn — inbox, contacts and jobs — in a database on your machine, and runs AI-assisted workflows from the terminal: sync your inbox, get a daily action plan, let your AI draft replies, classify contacts, queue connection requests, score and auto-apply to jobs. Install it into the ilml CLI." />
            <link rel="canonical" href="https://www.ilivemylife.io/linkedin/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="iLiveMyLife" />
            <meta property="og:title" content="LinkedIn, as data you own — the ilml plugin" />
            <meta property="og:description" content="A local mirror of your LinkedIn + AI-assisted workflows from the terminal: sync, reply, classify, connect, and apply — you own the data." />
            <meta property="og:url" content="https://www.ilivemylife.io/linkedin/" />
            <meta property="og:image" content="https://www.ilivemylife.io/images/apple-touch-icon.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <section className="ilml-hero">
            <div className="ilml-hero-glow" aria-hidden="true" />
            <div className="ilml-feature-hero">
                <a className="ilml-back" href="/developers/">← Developers</a>
                <span className="ilml-eyebrow">The ilml LinkedIn plugin</span>
                <h1 className="ilml-h1">Your LinkedIn —<br /><span className="ilml-grad-text">mirrored, and yours.</span></h1>
                <p className="ilml-lead ilml-feature-lead">
                    Not just auto-apply. <code>ilml-plugin-linkedin</code> keeps a <strong>local copy</strong> of your
                    LinkedIn — inbox, contacts and jobs — on your machine, and runs AI-assisted workflows from the
                    terminal: reply, classify, connect, and apply.
                </p>
                <div className="ilml-dev-links">
                    <a href={PLUGIN_NPM} target="_blank" rel="noopener noreferrer">npm: ilml-plugin-linkedin →</a>
                    <a href="/developers/">Built on the ilml CLI →</a>
                </div>
            </div>
        </section>

        {/* the point: a local copy */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Not a bot that clicks blindly</span>
                <h2 className="ilml-h2">A copy of your LinkedIn, on your machine.</h2>
                <p className="ilml-section-sub"><code>sync</code> pulls your inbox and contacts into a local database you own. Everything after that — planning your day, drafting replies, classifying people, choosing who to reach — runs against <strong>your own data</strong>, mostly with no browser open at all.</p>
            </div>
        </section>

        {/* capabilities */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">What it does</span>
                <h2 className="ilml-h2">One plugin, the whole workflow.</h2>
            </div>
            <div className="ilml-grid">
                {capabilities.map((c) => (
                    <div className={`ilml-card ${c.accent}`} key={c.title}>
                        <div className="ilml-card-icon ilml-glyph" aria-hidden="true">{c.icon}</div>
                        <h3 className="ilml-card-title">{c.title}</h3>
                        <p className="ilml-card-body">{c.body}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* the commands */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">In your terminal</span>
                <h2 className="ilml-h2">Every command, real.</h2>
                <p className="ilml-section-sub">The plugin installs into your <code>ilml</code> CLI and runs as <code>ilml linkedin &lt;command&gt;</code>. Run <code>ilml linkedin help</code> any time for the full list.</p>
            </div>
            <div className="ilml-term">
                <div className="ilml-term-bar">
                    <span className="ilml-term-dots"><i /><i /><i /></span>
                    <span className="ilml-term-title">ilml linkedin — command reference</span>
                </div>
                <div className="ilml-term-body">
                    {cliGroups.map((g) => (
                        <div className="ilml-term-group" key={g.group}>
                            <div className="ilml-term-cat"># {g.group}</div>
                            {g.items.map(([cmd, desc]) => {
                                const rest = cmd.replace(/^ilml/, '');
                                return (
                                    <div className="ilml-term-line" key={cmd}>
                                        <span className="ilml-term-cmd"><span className="ilml-term-prompt">$ </span><b>ilml</b>{rest}</span>
                                        <span className="ilml-term-desc"># {desc}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* AI + dedicated account */}
        <section className="ilml-section ilml-section-alt">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Driven by your AI</span>
                <h2 className="ilml-h2">Your assistant does the writing.</h2>
                <p className="ilml-section-sub">The <code>messages</code> flow is built for AI: your assistant drafts the replies, you review them, the plugin sends them. Because the plugin runs on the same <code>ilml</code> CLI, your AI can reach it — and your graph — over MCP.</p>
            </div>
            <div className="ilml-callout">
                <span className="ilml-callout-tag">Pro</span>
                <p>
                    <b>Give it its own account.</b> Automations are cleaner on a dedicated login. Run
                    <code> ilml login --local</code> inside the plugin’s folder to sign that project into a separate
                    account — your personal graph stays untouched while the bot works. One CLI, many accounts.
                    {" "}<a href="/developers/">More on accounts →</a>
                </p>
            </div>
        </section>

        {/* setup */}
        <section className="ilml-section">
            <div className="ilml-section-head">
                <span className="ilml-eyebrow ilml-eyebrow-dark">Get started</span>
                <h2 className="ilml-h2">Three commands to first sync.</h2>
                <p className="ilml-section-sub">Node 18+. You’ll need the <code>ilml</code> CLI (a one-line install) and a LinkedIn account.</p>
            </div>
            <div className="ilml-dev ilml-dev-1">
                <CopyBlock label="install, log in, first sync" code={
`npm install -g @ilivemylife/graph-sdk   # the ilml CLI
ilml plugin install linkedin             # add the plugin
ilml linkedin login                      # log in once, cookies saved
ilml linkedin sync                       # pull your inbox locally
ilml linkedin today                      # your action plan for today`} />
            </div>
            <div className="ilml-dev-links">
                <a href={PLUGIN_NPM} target="_blank" rel="noopener noreferrer">npm: ilml-plugin-linkedin →</a>
                <a href={SDK_NPM} target="_blank" rel="noopener noreferrer">Build your own plugin →</a>
            </div>
        </section>

        <section className="ilml-final">
            <h2 className="ilml-final-title">Own your <span className="ilml-grad-text">network.</span></h2>
            <p className="ilml-final-text">A local mirror, your AI, and one CLI — LinkedIn on your terms.</p>
            <a className="ilml-btn ilml-btn-primary ilml-btn-lg" href={PLUGIN_NPM} target="_blank" rel="noopener noreferrer">Get the plugin →</a>
        </section>
    </div>
);

export default LinkedIn;
