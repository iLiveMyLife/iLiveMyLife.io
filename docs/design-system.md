# iLiveMyLife — Design System (v0)

The shared visual language for iLiveMyLife surfaces — landing, app, and ecosystem
sites (BasicNeeds, DigitalTwins…). The goal: **one consistent palette to develop
against**, like a brand guideline. Start here; tune over time.

> Status: v0, extracted from the landing + the app. The **app already uses Inter**,
> which Ilya likes — so Inter is the canonical typeface and the landing now matches it.
> Mirror this into the graph `Design ▸ UI / UX` nodes when convenient (docs-in-graph).

---

## 1. Typeface — **Inter**

One typeface, used everywhere (matches the app). Clean, modern product standard
(Linear, Vercel, GitHub). Distinctiveness comes from layout, color and the graph
motif — not from an exotic font.

| Role | Weight | Notes |
|------|--------|-------|
| Display (hero H1) | 800 | letter-spacing `-0.02em`, line-height ~1.05 |
| Headings (H2/H3) | 700 | letter-spacing `-0.02em` |
| UI / labels / buttons / nav | 600 | eyebrows uppercase, letter-spacing `0.16em` |
| Body | 400–500 | line-height ~1.6 |

Load once, globally: `Inter:wght@400;500;600;700;800` (in `public/index.html`).
Fallback stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

## 2. Color

**Brand**
- Blue (primary brand / headings accent): `#2697ff` — AA-safe small-text variant `#0a6fd6`
- Ink (text): `#16233b` · Muted: `#56678a` · Hairline: `#e7eef7` · Soft bg: `#f4f8fd`

**Plan / accent colors** (exact, shared with `/membership`)
- Individual / cyan `#00B7FF` · Partner / teal `#61BD9E` · Leader / orange `#E09200` · Investor / maroon `#AE2012`
- Secondary accents used in cards: cyan `#29abe2`, teal `#5bb89a`, orange `#e89b2c`, maroon `#a52121`

**Primary-CTA shimmer** (the `Ilmlbutton`, ties to "Your Free Bike" rainbow)
- Gradient: `linear-gradient(45deg, #F5626B, #D3FF76, #FFF8B6, #2bb673)`, `background-size: 300% 100%`
- Hover: slide `background-position: 0 → 100%` over `.8s`

## 3. Buttons

- **Primary** — white text on the shimmer gradient above; pill (`border-radius: 999px`); slides on hover. Used for the one main action per view (Start your graph, Join…).
- **Ghost (secondary)** — white bg, `1.5px` border `#bcd2ec`, blue-ink text, subtle shadow; for secondary actions (See how it works).
- One primary per section. Don't stack two shimmer buttons.

## 4. Shape, depth, motion

- **Radius:** cards `16–20px`, chips/pills `999px`, code/inputs `12–14px`.
- **Shadows:** soft, low-opacity, large-blur (`0 16px 40px -28px rgba(22,35,59,.4)`); lift on hover.
- **Cards:** white, `1px` hairline border, top accent bar in the card's accent color.
- **Motion:** one staggered page-load reveal (fade-up); gentle, purposeful; always honor `prefers-reduced-motion`.

## 5. Logo / wordmark

- Text wordmark: **"iLiveMyLife …and so do you"**, Inter 600, brand blue `#2697ff`.
- Graph motif (root "My Life" node + labeled satellites) is the recurring brand visual.

## 6. Accessibility

- Body/UI text meets WCAG AA. Use `#0a6fd6` (not raw `#2697ff`) for small blue text.
- Visible `:focus-visible` rings; `prefers-reduced-motion` guards; forced-colors fallback for gradient text.

---

### Open / next
- **App alignment:** the app uses Inter (good) — over time align its colors, buttons and spacing to this doc (big design effort; not now — keep balance).
- Mirror into graph `Design ▸ UI` & `UX` nodes (currently empty placeholders).
- Tune weights/scale with Ilya; this is v0, meant to be reacted to, not final.
