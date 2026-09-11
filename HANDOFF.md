# Handcraft Burgers & Brew — website handoff

This is everything you need to put the new handcraftburgers.com live and keep
it running without us. It is written for the owner, not a developer. Where a
step genuinely needs a developer, it says so.

---

## 1. What you are receiving

| File | What it is | Who uses it |
|---|---|---|
| `handcraft-site.zip` | The finished website as plain files. Unzip it and it is the site. | You, to go live |
| `handcraft-source.zip` | The source code the site is built from. | A developer, for future changes |
| `HANDOFF.md` (this document) | Instructions | You |
| `PHOTOS.md` | Which photo is where, and how to swap one | You or a developer |

The site has no server, no database and no monthly software. It is a folder
of HTML, images and scripts. Any web host that can serve plain files can host
it, for free or nearly free.

---

## 2. Go live in one afternoon

You need two accounts you probably already have: whoever owns the
**handcraftburgers.com** domain (GoDaddy, Google Domains, Squarespace, or
wherever it was bought), and a free **Netlify** account.

### Step 1 — put the site on Netlify (10 minutes)

1. Go to <https://app.netlify.com/drop> and sign up or log in.
2. Drag `handcraft-site.zip` onto the page. Do not unzip it first.
3. Netlify gives you a temporary address like `something-random.netlify.app`.
   Open it. That is the whole site, live. Click around and check it.

### Step 2 — attach your domain (10 minutes, then up to a day to propagate)

1. In Netlify, open the site and go to **Domain management → Add a domain**.
2. Type `handcraftburgers.com` and follow the prompts. Netlify shows you two
   DNS records to add (an `A` record and a `CNAME` for `www`).
3. Log in to wherever the domain lives and add those two records, replacing
   the ones that point at the old site.
4. Wait. Most registrars update in an hour; some take up to 24.
5. Back in Netlify, click **Verify** and then **Provision certificate**.
   HTTPS (the padlock) switches on automatically and renews itself.

### Step 3 — check the live site once

Open handcraftburgers.com on a phone and a laptop and confirm:

- Every **Order Online** button opens `handcraftburgers.menu` in a new tab.
- **Hours** in the footer and on the Visit page match the door.
- The **phone number** and **address** are right.
- **Join the Club** opens the Hospitality Club sign-up.
- The three legal links in the footer open.

That is it. The old site can be switched off.

---

## 3. What updates by itself, and what does not

**Updates by itself:** the menu and prices. Every Order button sends people
to `handcraftburgers.menu`, which is fed from Toast. When you change an item
or price in Toast, the ordering site changes with it and nothing on this
website needs touching. That is why the website deliberately shows no prices
and has no cart of its own.

**Does not update by itself:** the eight "Most Loved" items on the home page,
the "This Month's Handcraft" burger, and all of the written copy. These are
fixed on the site. If you retire one of the eight, or want a different burger
of the month, a developer changes one line and rebuilds (see section 5).

**Hours** are fixed too. Regular hours per day and the four holiday dates are
in the site; the header's "Open until" line is worked out live from those.
Changing them is a developer task.

---

## 4. Swapping a photo without a developer

Every photo on the site is a plain file inside `handcraft-site.zip`, in the
`img` folder, and the site finds it by filename. So a swap is:

1. Unzip `handcraft-site.zip`.
2. Find the file in `img/` (the names are plain: `og.jpg`, `buffalo-tots.jpg`,
   `founders.jpg`, and so on; `PHOTOS.md` lists every slot).
3. Replace it with your new photo **using exactly the same filename**. JPEG,
   any size; a phone photo is fine.
4. Zip the folder back up and drag it onto Netlify again. Netlify replaces
   the old version in about a minute.

The logo lives at `img/brand/logo-light.png` (used on dark backgrounds) and
`img/brand/logo-dark.png`.

---

## 5. Changing words, items or hours (developer, an hour or two)

Give a developer `handcraft-source.zip`. It is a standard Next.js site; they
will know it. The things you are most likely to want live in four small files:

| Change | File |
|---|---|
| Hours, holiday hours, phone, address, ordering link, club link | `lib/site.ts` |
| The eight Most Loved items, their descriptions, the burger of the month, the beer pairings | `lib/menu.ts` |
| The FAQ questions and answers | `lib/faq.ts` |
| Which photo goes where | `lib/images.ts` |

Rebuilding is two commands (`npm install`, then `npm run build:static`) and
produces a fresh `out` folder to drag onto Netlify, exactly like the zip.

If you would rather never touch a zip again, a developer can connect the
source code to Netlify once (instructions in `DEPLOY.md`) and every change
they save goes live on its own.

---

## 6. Two descriptions to confirm before launch

We wrote these two from photographs because we had no menu text for them.
If the board says something different, they take a minute to fix.

- **Buffalo Tots:** "Tater tots loaded with crispy buffalo chicken, bacon,
  blue cheese crumbles and celery."
- **The 6.6 Combo:** "A Single Ultimate Smash with Handcraft fries and a
  drink."

Also worth a glance: the beer pairings under **Burgers Meet Brew** name
styles (a lager, an IPA, an amber), not specific beers, because the tap list
rotates. If you want them named, a developer changes three lines.

---

## 7. What the site is made of, for the record

- **Photography.** Every food, people and room photo is yours. One licensed
  stock image remains: the darkened backdrop behind the "Build" teaser on the
  home page (Unsplash licence, free for commercial use, no credit required).
- **Logo.** Your own badge from the brand folder, in two colour versions.
- **Fonts.** Google Fonts (Anton, Inter, JetBrains Mono, Kaushan Script),
  bundled into the site at build time so nothing loads from Google when a
  visitor arrives.
- **Order links.** All go to `https://handcraftburgers.menu/`. The ordering
  site is not embedded inside this one, on purpose: its checkout switches
  itself off when it is shown inside another page.
- **Hospitality Club.** Links to `handcraftburgers.com/hospitality-club`.
  Make sure that address still works after the domain moves, or a developer
  can point it at the club's real sign-up page in `lib/site.ts`.
- **Social.** The footer links to Instagram (`@handcraftburgers`). Facebook
  and TikTok were left out because we did not have the addresses; a developer
  adds them in `components/layout/Footer.tsx`.
- **Legal.** The Terms of Service, Privacy Statement and Do Not Sell links in
  the footer are the ones you supplied, unchanged.
- **No tracking.** The site sets no cookies and runs no analytics. If you want
  Google Analytics or a Meta pixel, a developer adds it in `app/layout.tsx`.

---

## 8. If something goes wrong

- **Site is down.** Netlify's status page is <https://www.netlifystatus.com>.
  Outages are rare and short.
- **Domain shows the old site or an error after moving.** DNS has not
  finished propagating. Give it 24 hours before worrying.
- **A photo looks wrong after a swap.** The filename did not match exactly
  (watch for `.JPG` versus `.jpg`, or a trailing space).
- **You want the site changed and have no developer.** Any freelancer who
  knows React or Next.js can work from `handcraft-source.zip`; the notes in
  `README.md` and `DEPLOY.md` are for them.
