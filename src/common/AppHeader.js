import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const about = [
    { label: "Our Intro doc", href: "https://app.ilivemylife.io/document/00000189b80973f0-eef90d0aab200000" },
    { label: "Roadmap", href: "https://app.ilivemylife.io/item/0000017bc1c523b1-962bac6823350000" },
    { label: "Deck", href: "https://app.ilivemylife.io/item/0000017c75eb8baa-260630ac320d0000" },
    { label: "Project node", href: "https://app.ilivemylife.io/item/000001736056c2cb-2655b2cf545d0001" },
    { label: "iLiveMyLife as a 3D graph", href: "https://app.ilivemylife.io/graph/000001736056c2cb-2655b2cf545d0001" },
];

// Lightweight custom header — replaces the antd Menu + responsive-ant-menu nav
// (which emitted deprecated-API warnings). The "About us" dropdown is a native
// <details> element; only the mobile hamburger needs state.
const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <header className="app-header">
            <div className="container app-header-inner">
                <div className="app-title"><Link to="/" onClick={close}>iLiveMyLife ...and so do you</Link></div>
                <button className="app-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
                    {open ? <CloseOutlined /> : <MenuOutlined />}
                </button>
                <nav className={`app-nav${open ? " open" : ""}`}>
                    <Link className="app-navlink" to="/my-life" onClick={close}>My Life</Link>
                    <Link className="app-navlink" to="/membership" onClick={close}>Choose yourself</Link>
                    <details className="app-about">
                        <summary className="app-navlink">About us</summary>
                        <div className="app-about-menu">
                            {about.map((a) => (
                                <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" onClick={close}>{a.label}</a>
                            ))}
                        </div>
                    </details>
                    <a className="app-navlink" href="https://www.youtube.com/playlist?list=PLYkUZvRwI3MhnNJGQ12lqXUageAX0sxtt" target="_blank" rel="noopener noreferrer" onClick={close}>How to Start</a>
                    <a className="app-navlink app-navlink-cta" href="https://app.ilivemylife.io/signup" target="_blank" rel="noopener noreferrer" onClick={close}>Join</a>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
