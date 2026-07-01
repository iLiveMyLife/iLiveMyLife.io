# Contracts & Automation — full spec / idea capture

Source of truth for the `/automation` and `/event-sourcing` landing pages **and** for future
development. Everything Ilya described about contracts, plus the authoritative graph docs, captured
here so nothing is lost. When in doubt, read the graph docs (node IDs at the bottom) — they are canonical.

Framing for the landing: represent the **ideal future grounded in what's already coded** — don't
over-promise, but the near-future roadmap items are fair game (they're documented). "Врать сильно
не хочется, но будущее норм."

---

## 1. What a contract is

A **contract is an ordinary node** with `{{webhook:URL}}` in its **title**. Any change inside that
node's subgraph (creating / editing / deleting child nodes and messages) triggers the webhook.

- Title: `{{webhook:https://api.ilivemylife.io/contracts/v1/contracts/<type>}}`
- Tag: `#contract` (+ a color tag, green `#color#76,175,80,0.5` when healthy)
- **Description = the config JSON** (`contractConfig`) — see §3
- Activates immediately on creation. Prepare code + config BEFORE creating the contract node.
- A node can be **anything** — a task, a marker, a contract, a chunk of code, a markdown doc.
  The graph is like **collaborative folders (Google Drive), but with automation baked in**.

## 2. Contract types (the `<type>` in the URL)

| Type | Does |
|------|------|
| `sandboxed` | Runs JavaScript from a specified code node |
| `lifebot-prompt` | Sends a prompt + the event context to Lifebot (natural-language automation) |
| `twitter` | Posts to Twitter/X when a marker changes |
| `logger` | Logs every event (debugging / audit) |

## 3. Config (`contractConfig`, in the node description)

Valid JSON. It is **your** object — pass anything (acts like env):

```json
{ "codeNodeId": "<node whose description holds the JS>",   // required for sandboxed
  "nodeId":     "<node to post to / stream results to>",   // optional
  "prompt":     "<execution prompt, e.g. for lifebot-prompt>",
  "apiKey":     "<any custom config your code needs>",
  "sandboxBaseTimeoutMs": 30000 }                           // optional, cap 600000
```

**Auth / identity (important):** a service token is generated automatically on create/update — no
`userToken` needed. **The contract runs AS the user who last updated it** (delegated rights). The
graph it can touch = that creator's graph. This is why re-saving the contract re-authorizes it.

## 4. The code (sandboxed)

- Lives in **any node you point `codeNodeId` at** — NOT necessarily a sibling. Keep code and data
  laid out across the project however you like. **Keep it OUTSIDE the contract's watched branch**,
  else editing the code is itself an event that re-triggers the contract.
- Wrap in ```js fences (auto-stripped before execution). Fence-less also works.
- **Injected variables:** `event`, `eventType`, `eventId`, `entityId`, `fromItemId`, `userId`,
  `contractConfig`.
- **APIs:** `graph.*` (getItem, getItems, addItem, editItem, archiveItem, moveItem, addMessage,
  askLifebot, searchMessages, getSubItemCount, lastVisits, lastNotifications, editItemSettings, …),
  `fetch(url, opts)` (HTTPS only, private networks blocked, 10s, returns a **plain object**
  `{ ok, status, statusText, body }` — body already parsed; no `.json()`/`.text()`), `console.log`.
- Canonical read pattern: `const item = await graph.getItem(entityId)`
  (NOT `event.title` — the real shape is `event.itemInfo.itemDetails.title`).
- **Limits:** 30s base wall-clock, auto-extends +2min per `askLifebot`, hard cap 600s, 128 MB,
  fetch 10s. Blocked: `graph.destroy()`, `graph.login()`, `graph.token`.

## 5. Event-sourcing (the mental model)

Nothing is overwritten in place. Every change is a **command → an immutable event** that **propagates
UP the tree**. Like a blockchain keeps a chain of transactions rather than a mutable balance, the
graph keeps a chain of events. **The same event stream feeds two things: a node's replayable history
AND the contracts watching above it.**

- **Watch by reference:** don't copy prod data into the contract — drop a **reference** to the node(s)
  you care about; their change events bubble up to that reference and trigger the contract. Watch a
  project, a person, a whole branch, without duplication.
- **Event list** (each carries who + when, `inMilli`):
  `ItemCreatedEvent`, `ItemUpdatedEvent`, `ItemArchivedEvent`, `ItemMovedOutEvent`,
  `ItemMovedInEvent`, `MessageCreatedEvent`, `MessageUpdatedEvent`, `MessageArchivedEvent`.
- Messages the contract itself posts are **skipped** (prevents infinite loops).
- Events also stream into the **contract node's messenger** (visible log of what fired).
- **Serviced-event dedup:** the contract tracks event IDs it already handled so it doesn't
  double-process. (Internal mechanic — probably not landing material.)

## 6. Lifebot inside a contract — the level of automation

- `const r = await graph.askLifebot(node, prompt)` — asks **as you**, authorized as you, so it can
  **search / summarize / reason over YOUR whole graph**, returns `{ content }`. Then you act on it:
  file it into the right project, create a node, or **stream it out** via `fetch`. (Don't just ask and
  echo back to the same node — that's pointless; the value is reasoning + routing/creating.)
- `graph.addMessage(node, "…", { lifebot: 'on' })` — a message with Lifebot **on** is an **instruction
  Lifebot executes as you**: reply, create a node, rename a node, e.g. `addMessage(node, "the title
  holds a counter — set it one higher")` and it does it. `{ lifebot: 'off' }` = just log, don't ask AI.
  (addMessage options: `type` normal|reply|forward, `lifebot` on|off, `notify` on|off|postpone, `refId`.)
- **Per-node, per-user AI settings** (`editItemSettings`): **scope** (`lifebotRootAccess` — search from
  the My Life root vs only the current subtree) and **model** (cheap model for high-frequency
  automation, smart model for the hard calls). So automation can be frequent+cheap or rare+smart.

## 7. No-code automation — a contract written in plain words

A node can simply **be** the bot. Put the job in its **description in plain language**, tag it
`assist`, and Lifebot runs it on every message (this is the `lifebot-prompt` idea). Real example
(node `00000195408c21c6-...`, description):

> "You are Lifebot, a bot in the messenger. On each user message: return only a create-node command
> named after the message author. Don't generate text replies. Focus on the current message, ignore
> chat history."

A message like `@Lifebot, do the action described in the node` triggers it, and it creates a child
node named after whoever sent the event — **as that user**. Words and code **compose**: a sandboxed
contract can `addMessage(..., {lifebot:'on'})` to drive a prose bot, and vice-versa.

## 8. Lifebot builds the contract FOR you

Lifebot knows the contracts docs — every event, every injected variable, the config shape. Ask in
plain language ("set up a contract that pings me when a task is marked done") and it **assembles the
whole thing**: the contract node, the code node, the config wiring — and switches it on. Easiest way in.

## 9. Self-healing + error handling

When code throws:
1. Error posted to the **code node's** messenger: `Contract error: <message>`.
2. Contract node gets `#contract#disabled` tag + **red** `#color#253,4,8,0.5`; stops processing.
3. If the code node has the `assist` tag → **Lifebot reads the error, fixes the code, and re-enables
   the contract** (removes the disabled tag, sets green). Or you re-enable manually.
4. First successful run after re-enable → resets to **green** `#color#76,175,80,0.5`.

**Error codes:** `CODE_BROKEN` (syntax/runtime), `CODE_CHANGED` (code edited by someone other than
the contract's authorizer — paused for security; **re-save the contract to re-authorize**),
`SANDBOX_TIMEOUT` (over 600s), `WEBHOOK_ERROR` (generic). Re-enable via app / ask Lifebot /
SDK `graph.editItem(id, { removeTags: ['#contract#disabled*'], addTags: ['#color#76,175,80,0.5'] })`.

## 10. Roadmap / ideal future (documented — safe to hint at)

From the "Bots & Agents Architecture" node: sandboxed contracts already = a bot runtime
(JS + graph + HTTP + AI). Planned:
- **Scheduled / cron triggers** (Phase 5) — the "on a schedule" idea.
- **Named, callable bots** — `@BotName do X` in a messenger; direct API endpoint; contract-to-contract
  `graph.callBot(...)`.
- **Claude-Code execution environment** — full AI agent (file system, bash, web search, MCP) for
  power tasks beyond the sandbox; event batching while it works.
- **Bot ecosystem** — system bots (ContractDoctor, BackupBot) + user + AI-powered bots (ResearchBot…).
- **Provider independence** — evolve `lifebot-prompt` into an own agentic runtime supporting any model.

## 11. What it's really for — digital twins / clones

A graph that mirrors something real and keeps itself in sync **is a digital twin**. Events = its
heartbeat, contracts = its reflexes, Lifebot = its judgment. Use cases to lean on:
- **A digital company** — departments/people/projects as nodes; contracts route work, nudge owners,
  roll up reports; the org runs itself while you replay its history.
- **A robot / device** — its state is a set of nodes; every reading is an event streaming in;
  contracts react in real time; a live twin you can replay, inspect, drive.
- **An event-sourced ledger (accounting)** — every transaction an immutable event; contracts post
  balances, reconcile, flag anomalies; books that can't lose a number and explain themselves.
- **A second brain** — your whole life as a graph that remembers, summarizes, and acts for you.

---

## 12. Landing coverage map (what's live vs pending)

Live on **`/automation`**: the contract (node+code, code-by-id), event-sourcing + reference,
four types (external stream emphasized), askLifebot (meaningful examples), lifebot-on instruction,
per-node model/scope, Lifebot-builds-it (chat), plain-words bot (chat), self-healing, runs-as-you,
schedule-coming, digital-twin use cases. **`/event-sourcing`**: ledger model, one stream two powers,
propagation, event list + event JSON. Cross-linked from `/knowledge-graph`.

**Not yet on the landing (candidates):**
- `CODE_CHANGED` security / re-authorize-by-re-save.
- Serviced-event dedup (likely too internal).
- Fuller agent roadmap (named bots `@BotName`, Claude-Code agents, bot ecosystem) — only "schedule — coming" is shown.
- "Graph = collaborative Google-Drive-like folders" is only implied on `/automation` (it's explicit on `/knowledge-graph`).
- Possible dedicated spoke pages: self-healing, Lifebot-builds-it, stream-beyond.
- Interactive/animated `ilml` CLI + MCP demo on `/developers` (real commands, real graph output).

## 13. Canonical graph docs (read these before changing the model)

- Webhooks (Smart Contracts) root: `0000017e5bea8218-4a6f58653f360000`
- Sandboxed Code Contracts: `0000019c51d3d77d-420aa21953490000`
- Event Types Reference: `0000019c51d3e4af-420aa21953490000`
- Bots & Agents Architecture (roadmap): `0000019c5373869f-420aa21953490000`
- SDK / CLI / MCP docs root: `0000019be3003af2-420aa21953490000`
- Live example — code contract folder "Testing": `0000019d820c3488-ce741af448160000`
  (code node `…820df88b`, contract node `…820df8af`)
- Live example — prose bot ("Task for Lifebot on each message"): `00000195408c21c6-2a42ba737dc90000`
