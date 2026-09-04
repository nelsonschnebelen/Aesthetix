/**
 * Every photograph on the site, in one place.
 *
 * `/img/*` are Handcraft's own assets committed to `public/img`. The
 * `images.unsplash.com` entries are licensed stock still covering the few
 * slots we have no Handcraft frame for; that host is allow-listed in
 * `next.config.ts`.
 */
const U = "https://images.unsplash.com/";

export const IMG = {
  // ---------------------------------------------------------- Handcraft --
  heroStreet: "/img/hero-street.jpg",
  smashOg: "/img/smash-og.jpg",
  smashOklahoma: "/img/smash-oklahoma.jpg",
  smashSpicy: "/img/smash-spicy.jpg",
  goodStuff: "/img/good-stuff.jpg",
  monthTray: "/img/month-tray.jpg",
  loadedTots: "/img/loaded-tots.jpg",
  fries: "/img/fries.jpg",
  burgerBrew: "/img/burger-brew.jpg",
  hospitality: "/img/hospitality.jpg",
  storefront: "/img/storefront.jpg",
  streetPark: "/img/street-park.jpg",
  threeUp: "/img/three-up.jpg",

  // ------------------------------------------------------------- stock ---
  classicSingle: U + "photo-1571091718767-18b5b1457add",
  basketCombo: U + "photo-1594212699903-ec8a3eca50f5",
  baconLight: U + "photo-1610440042657-612c34d95e9f",
  baconBlack: U + "photo-1586190848861-99aa4a171e90",
  stackedDark: U + "photo-1572802419224-296b0aeee0d9",
  charDouble: U + "photo-1568901346375-23c9450c58cd",
  griddleDuo: U + "photo-1550547660-d9450f859349",
  gardenStack: U + "photo-1512152272829-e3139592d56f",
  crispyBird: U + "photo-1606755962773-d324e0a13086",
  tenders: U + "photo-1626082927389-6cd097cdc6ec",
  sliders: U + "photo-1521305916504-4a1121188589",
  eggSmash: U + "photo-1534790566855-4cb788d389ec",
  yellowSmash: U + "photo-1596662951482-0c4ba74a6df6",
  steakFries: U + "photo-1600891964092-4316c288032e",
  deconstructed: U + "photo-1615297928064-24977384d0da",
  shakeSplash: U + "photo-1577805947697-89e18249d767",
  shakeStack: U + "photo-1572490122747-3968b75cc699",
  beerBlack: U + "photo-1608270586620-248524c67de9",
  beerPair: U + "photo-1600788886242-5c96aabe3757",
  diningRoom: U + "photo-1517248135467-4c7edcad34c4",
  barBulbs: U + "photo-1543007630-9710e4a00a20",
  cook: U + "photo-1541557435984-1c79685a082b",
  tableSpread: U + "photo-1466978913421-dad2ebd01d17",
} as const;

/**
 * Sized, cropped URL. Local `/img` assets are already sized at build time and
 * pass through untouched — only the remote host takes resize parameters.
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
