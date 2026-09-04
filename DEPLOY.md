# Deploying to Netlify

Two ways. Pick one.

---

## A. Drag and drop a folder of HTML (no repo, no build)

```bash
npm install
npm run build:static      # writes ./out
```

Then drag the **`out`** folder onto <https://app.netlify.com/drop>. That is the
whole deploy — it is plain HTML, CSS, JS and images, with no server, no build
step on Netlify's side and no configuration.

Every asset is local: the licensed stock photography was downloaded into
`public/img/stock/` rather than hotlinked, so nothing can break it from
outside. Verified by loading the built folder with all external network
requests blocked — six routes, zero broken images, zero outbound requests.

The trade-off versus option B: no on-demand image optimisation, so images ship
at the size they were authored (the export is about 9 MB total). For a site
this size that is fine.

---

## B. Connect the repo (continuous deploys)

The whole site prerenders to static pages — no server routes, no database, no
environment variables. It is about as simple as a Netlify deploy gets.

## Do this

1. Netlify → **Add new site → Import an existing project → GitHub**
2. Pick **`nelsonschnebelen/Aesthetix`**
3. **Change the branch to deploy** to `claude/smash-burgers-redesign-7a7ub8`

   > This is the one step that is easy to miss. Netlify defaults to the
   > repository's default branch, which is `main` — and `main` still holds the
   > old Aesthetix med-spa site. Deploy `main` and you will get that, not this.

4. Leave the build settings alone. `netlify.toml` already sets them:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node: 22
5. **Deploy**

First build takes roughly two to four minutes. You get a
`random-name-123.netlify.app` URL; rename it under **Site configuration →
Site details → Change site name**, or point a custom domain at it under
**Domain management**.

## Making this the permanent site

Two options, whichever you prefer:

- **Keep deploying the branch.** Fine indefinitely. Every push to
  `claude/smash-burgers-redesign-7a7ub8` redeploys.
- **Merge to `main` first**, then let Netlify deploy `main` as normal. Cleaner
  long-term, and it retires the med-spa site.

## Before pointing a real domain at it

Two images are AI-generated and contain **synthetic faces** —
`public/img/good-stuff.jpg` and `public/img/hospitality.jpg`. They are fine for
a preview URL but should not represent real staff or guests on a live
restaurant site. `PHOTOS.md` lists them along with the other stand-ins.

The menu prices, phone number and hours are also illustrative — worth a pass
before this is public.

## If the build fails

- **"Module not found" / lockfile errors** — make sure Netlify is running
  `npm run build`, not `yarn`. The repo has `package-lock.json`.
- **Images 404 in production** — check the deploy log actually shows
  `@netlify/plugin-nextjs` running. Without the Next runtime, `next/image`
  cannot optimise and the routes will not resolve.
