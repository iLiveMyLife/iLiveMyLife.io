# iLiveMyLife — Product Vision (founder's own words)

> Source of truth for landing copy/positioning. Captured from Ilya's description.
> Design reference: the **/membership** page is already well-designed and in the right colors —
> read it live (browser / web fetch), not just from code, and keep it indexable for search engines + AI.

## What it is, in one breath
iLiveMyLife is a **knowledge graph** that is also a **second brain** — and it's a whole ecosystem, not a single app. Each node can be content, a **messenger**, a **contract**, and is reachable through an **SDK / CLI / MCP**. People brag they wired Obsidian into Claude Code; here you also get **collaboration, privacy, wallets, KYC, 3D, and self-programming automation**.

## Core building blocks
- **Graph** — your life and projects as interconnected nodes (root node = "My Life").
- **Messenger inside every node** — conversations attached to context (a node), where **Lifebot** participates knowing *you* and the *graph tree inside that node* (your projects, resume, prompts about you and your work).
- **Contracts** — a node can be a contract that doesn't just call a prompt but can call a **webhook** in a **secure execution environment under the user's authorization** (it re-authorizes even when the user token is expiring). A contract can use the **SDK** to: write/edit/create nodes, **ask Lifebot in some node and wait for the answer**, make a decision (e.g. **spawn another contract** that listens to specific graph branches via links to those nodes) — i.e. a **self-programming, second-brain process**.
- **SDK / CLI / MCP** — works from **different accounts when logged in from different folders**, so external AIs (Claude Code, Kimi, etc.) can operate inside the graph via MCP.
- **Lifebot** — searches your personal graph; per-node config controls whether it may start search from the **root ("My Life")** or stay limited to the **current node and its children**; per-node automation settings.

## Privacy, access & trust
- Invite people onto nodes; make nodes **private** or **wallets** (fully secret from AI).
- Access checks for human-vs-bot via a **KYC tag**.
- **Collective work** on shared nodes.

## Part of a bigger ecosystem (projects on top of the graph)
- **Shop** — logs in with the iLML account; each product has a **chat** (users ↔ sellers or AI).
- **DigitalTwins.team** — Ilya's résumé site; a **new concept** is being prepared (uncommitted in the DT repo) with **ilML integration**. Company/people/work "digital clones" with pages.
- **Plugin system for the ilML CLI** — first plugin is **LinkedIn**: apply to jobs where form questions are answered **on your behalf** via the node messenger, where **Lifebot answers knowing you and your graph** (projects, résumé, prompts about you and the job) + per-node automation settings.
- **Project tokens** — sale / advertising of project tokens on the graph.
- **3D representation** of a node.

## Why it matters (the edge)
Worldwide markets, anyone who wants to **digitize their company** is the audience. Not a niche tool — a global ecosystem where humans + multiple AIs build together, each resuming work from graph nodes, with real privacy, collaboration, and programmable automation.
