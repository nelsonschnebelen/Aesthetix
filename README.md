# Handcraft — Smash Burgers & Brew

A full redesign of a smash-burger restaurant site, built as a Next.js app.
Char-black griddle surfaces, ember and molten-cheese accents, condensed
display type, and a technical mono register used for the things a burger
shop actually measures: griddle temperature, sear time, patty weight.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

## What is in here

| Route | What it does |
|---|---|
| `/` | Cinematic scroll hero, claim strip, the smash rail, burger of the month, sides, hospitality, brew pairings, Forge teaser, club, visit |
| `/menu` | The live Toast menu widget — Toast is the single source of truth for items and prices |
| `/build` | **The Forge** — an interactive builder that draws the burger as you stack it |
| `/story` | The origin, the beef, the room |
| `/visit` | Address, hours, live open/closed |

## The pieces worth knowing about

**Cinematic scroll hero** (`components/hero/CinematicHero.tsx`,
`components/motion/ScrollMotion.tsx`, the `CINEMATIC SCROLL HERO` block in
`app/globals.css`). A 400vh runway pins a full-viewport stage while three
acts scrub past on one shared timeline: the wordmark, the promise, then the
real hero. Two engines drive the identical keyframe tables — CSS scroll
timelines where supported (zero JS per frame), a damped `requestAnimationFrame`
loop everywhere else. **Edit the two together or the film plays differently
per browser.** With no engine at all — reduced motion, no JS, a crawler —
Act III renders on its own as a complete, conventional, clickable hero.

**The Forge** (`components/build/BurgerBuilder.tsx`, `lib/forge.ts`). Every
ingredient carries a heat rating, a stack order and its own rendered
geometry, so the burger assembles itself in the order the kitchen builds it.
Layer count, beef weight, sear time and stack height update live, and
`nameBuild()` names the result deterministically — the same burger always
earns the same name.

**Live griddle status** (`lib/utils.ts`, `components/GriddleStatus.tsx`).
Open/closed is computed against the shop's own clock in `America/New_York`,
client-side only — a server-rendered answer would be stale before anyone
read it.

## The menu is not maintained here

Toast owns the menu. Items, prices and availability come from the live
ordering system, so a change in Toast is a change on the site with no deploy
and nothing to edit in this repo.

Set `SITE.menuEmbedUrl` in `lib/site.ts` to the embed URL Toast provides and
`/menu` renders the widget; until then it renders a handoff panel linking to
the ordering site. Nothing anywhere on the site states a price — that is
deliberate, so the site can never contradict Toast.

`lib/menu.ts` still holds item names, photographs, heat ratings and build
sheets for the marketing sections. If an item is renamed in Toast, that file
is the only place to match it, and nothing breaks if it drifts.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 (tokens live
in `@theme` in `app/globals.css`) · Framer Motion · TypeScript.

Photography is served from Unsplash (`images.unsplash.com` is allow-listed in
`next.config.ts`); every URL lives in `lib/images.ts`. Menu, prices and copy
are illustrative.
