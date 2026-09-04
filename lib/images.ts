/**
 * Every photograph on the site, in one place — and all of it local.
 *
 * `/img/*` are Handcraft's own photographs. `/img/stock/*` are licensed
 * Unsplash images downloaded into the repo rather than hotlinked, so a
 * static export is entirely self-contained and cannot be broken by a
 * third party rate-limiting or blocking us.
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
  monthTray: "/img/month-tray.jpg",
  loadedTots: "/img/loaded-tots.jpg",
  sauceFlight: "/img/sauce-flight.jpg",
  fries: "/img/fries.jpg",
  burgerBrew: "/img/burger-brew.jpg",
  hospitality: "/img/hospitality.jpg",
  storefront: "/img/storefront.jpg",
  streetPark: "/img/street-park.jpg",
  threeUp: "/img/three-up.jpg",

  // -------------------------------------------------- licensed stock ----
  baconBlack: "/img/stock/baconBlack.jpg",
  baconLight: "/img/stock/baconLight.jpg",
  basketCombo: "/img/stock/basketCombo.jpg",
  beerPair: "/img/stock/beerPair.jpg",
  crispyBird: "/img/stock/crispyBird.jpg",
  deconstructed: "/img/stock/deconstructed.jpg",
  diningRoom: "/img/stock/diningRoom.jpg",
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
  if (!src.startsWith("http")) return src;
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
  { path: "public/img/good-stuff.jpg", shows: "Real guests at a table (currently generated — synthetic faces)" },
  { path: "public/img/hospitality.jpg", shows: "Real team at the counter (currently generated — synthetic faces)" },
];
