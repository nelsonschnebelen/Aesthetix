/**
 * Every photograph on the site, in one place — and all of it local.
 *
 * `/img/*` are Handcraft's own photographs. `/img/stock/*` and a few files
 * in `/img/` are licensed Unsplash photography, downloaded into the repo
 * rather than hotlinked so a static export is self-contained.
 *
 * There is no AI-generated imagery on this site. Every file here is a real
 * photograph — either the owner's or licensed stock.
 */

export const IMG = {
  // ---------------------------------------------------------- Handcraft --
  heroStreet: "/img/hero-street.jpg",
  smashOg: "/img/smash-og.jpg",
  smashOklahoma: "/img/smash-oklahoma.jpg",
  smashSpicy: "/img/smash-spicy.jpg",
  baconJam: "/img/bacon-jam.jpg",
  brat: "/img/brat.jpg",
  goodStuff: "/img/good-stuff.jpg",
  loadedTots: "/img/loaded-tots.jpg",
  sauceFlight: "/img/sauce-flight.jpg",
  fries: "/img/fries.jpg",
  storefront: "/img/storefront.jpg",

  // -------------------------------------------------- licensed stock ----
  baconBlack: "/img/stock/baconBlack.jpg",
  baconLight: "/img/stock/baconLight.jpg",
  basketCombo: "/img/stock/basketCombo.jpg",
  beerTap: "/img/stock/beerTap.jpg",
  crispyBird: "/img/stock/crispyBird.jpg",
  deconstructed: "/img/stock/deconstructed.jpg",
  eggSmash: "/img/stock/eggSmash.jpg",
  griddleDuo: "/img/stock/griddleDuo.jpg",
  shakeSplash: "/img/stock/shakeSplash.jpg",
  shakeStack: "/img/stock/shakeStack.jpg",
  sliders: "/img/stock/sliders.jpg",
  stackedDark: "/img/stock/stackedDark.jpg",
  tenders: "/img/stock/tenders.jpg",
} as const;

/**
 * Sized URL. Everything is local now, so this is a pass-through; it stays
 * because a remote source could be reintroduced and would need the params.
 */
export function img(
  src: string,
  { w = 1200, h, q = 72 }: { w?: number; h?: number; q?: number } = {},
): string {
  // Local files are served under the deploy's base path (empty everywhere
  // except a GitHub Pages preview, where it is /<repo>).
  if (!src.startsWith("http")) return (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + src;
  const parts = ["auto=format", "fit=crop", `w=${w}`, `q=${q}`];
  if (h) parts.push(`h=${h}`);
  return `${src}?${parts.join("&")}`;
}

/**
 * Slots the site is built for but has no photograph for yet. Drop a file at
 * the path and add it to IMG above.
 */
export const PENDING_PHOTOS: { path: string; shows: string }[] = [
  { path: "public/img/hangover.jpg", shows: "The Hangover — hash brown, bacon, runny egg" },
  { path: "public/img/two-up.jpg", shows: "Two OG singles with fries in paper cups" },
  { path: "public/img/dining-room.jpg", shows: "The room — wood slat, subway tile, Get Smashed neon" },
  { path: "public/img/good-stuff.jpg", shows: "Your own guests at a table (currently licensed stock)" },
  { path: "public/img/room.jpg", shows: "Your room — wood slat, subway tile, Get Smashed neon" },
  { path: "public/img/smash-spicy.jpg", shows: "The Spicy Ultimate Smash (currently licensed stock)" },
];
