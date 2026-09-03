/**
 * Every photograph on the site, in one place.
 * All IDs verified against images.unsplash.com (allow-listed in next.config.ts).
 */
const U = "https://images.unsplash.com/";

export const IMG = {
  // Hero / atmosphere
  heroSmash: U + "photo-1607013251379-e6eecfffe234",
  griddleDuo: U + "photo-1550547660-d9450f859349",
  charDouble: U + "photo-1568901346375-23c9450c58cd",
  stackedDark: U + "photo-1572802419224-296b0aeee0d9",
  baconBlack: U + "photo-1586190848861-99aa4a171e90",
  deconstructed: U + "photo-1615297928064-24977384d0da",
  tableSpread: U + "photo-1466978913421-dad2ebd01d17",

  // Menu
  classicSingle: U + "photo-1571091718767-18b5b1457add",
  basketCombo: U + "photo-1594212699903-ec8a3eca50f5",
  baconLight: U + "photo-1610440042657-612c34d95e9f",
  gardenStack: U + "photo-1512152272829-e3139592d56f",
  crispyBird: U + "photo-1606755962773-d324e0a13086",
  tenders: U + "photo-1626082927389-6cd097cdc6ec",
  sliders: U + "photo-1521305916504-4a1121188589",
  eggSmash: U + "photo-1534790566855-4cb788d389ec",
  yellowSmash: U + "photo-1596662951482-0c4ba74a6df6",
  fries: U + "photo-1518013431117-eb1465fa5752",
  steakFries: U + "photo-1600891964092-4316c288032e",

  // Drinks
  shakeSplash: U + "photo-1577805947697-89e18249d767",
  shakeStack: U + "photo-1572490122747-3968b75cc699",
  beerBlack: U + "photo-1608270586620-248524c67de9",
  beerPair: U + "photo-1600788886242-5c96aabe3757",

  // Rooms & crew
  shopFront: U + "photo-1554679665-f5537f187268",
  diningRoom: U + "photo-1517248135467-4c7edcad34c4",
  barBulbs: U + "photo-1543007630-9710e4a00a20",
  industrial: U + "photo-1555396273-367ea4eb4db5",
  cook: U + "photo-1541557435984-1c79685a082b",
} as const;

/** Sized, cropped Unsplash URL. */
export function img(
  src: string,
  { w = 1200, h, q = 72 }: { w?: number; h?: number; q?: number } = {},
): string {
  const parts = [`auto=format`, `fit=crop`, `w=${w}`, `q=${q}`];
  if (h) parts.push(`h=${h}`);
  return `${src}?${parts.join("&")}`;
}
