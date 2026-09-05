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
| `/menu` | A handoff to the live ordering menu, with the board embedded below it |
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

The ordering system owns the menu. Items, prices and availability come from
it live, so a change there is a change on the site with no deploy and nothing
to edit in this repo.

It runs on DoorDash "Tableside Order & Pay" — the app bundle loads DoorDash's
design system and Stripe — reached at `handcraftburgers.menu`. The copy on the
site never names the provider, so switching provider is a one-line change to
`SITE.orderUrl` rather than a copy edit.

`/menu` leads with a handoff panel, which is a plain link and cannot fail, and
embeds the live board below it. That order is deliberate: no header blocks
framing, but the ordering app is a Stripe-backed payment flow and those can
misbehave cross-origin, so a blank frame degrades to a working page. Set
`SITE.menuEmbedUrl` to `null` to drop the frame entirely.

Nothing anywhere on the site states a price. That is deliberate — the site
cannot contradict the ordering system.

`lib/menu.ts` still holds item names, photographs, heat ratings and build
sheets for the marketing sections. If an item is renamed, that file is the
only place to match it, and nothing breaks if it drifts.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 (tokens live
in `@theme` in `app/globals.css`) · Framer Motion · TypeScript.

Photography is served from Unsplash (`images.unsplash.com` is allow-listed in
`next.config.ts`); every URL lives in `lib/images.ts`. Menu, prices and copy
are illustrative.
