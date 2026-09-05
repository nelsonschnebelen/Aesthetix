import { IMG } from "@/lib/images";

/**
 * The items the site shows by name. These are the eight the ordering site
 * marks "Most Loved", with their names and descriptions taken verbatim from
 * it, plus the Ripper the FAQ names. Nothing here carries a price — the
 * ordering system owns prices, so the site can never contradict it.
 */

export type Category = "smash" | "dogs" | "notbeef" | "sides";

export type MenuItem = {
  id: string;
  name: string;
  category: Category;
  blurb: string;
  /** Bottom bun up, as far as the description tells us. */
  build: string[];
  /** 0 (no heat) — 5 (send help). */
  heat: number;
  image?: string;
  badges?: string[];
};

export const MENU: MenuItem[] = [
  {
    id: "og",
    name: "OG",
    category: "smash",
    blurb: "Double smashed beef patties, sharp American cheddar, Handcraft sauce, shredded romaine, tomato.",
    build: [
      "Toasted crown",
      "Handcraft sauce",
      "Shredded romaine",
      "Tomato",
      "Sharp American cheddar",
      "Smashed beef patty",
      "Sharp American cheddar",
      "Smashed beef patty",
      "Heel",
    ],
    heat: 1,
    image: IMG.og,
    badges: ["Most loved"],
  },
  {
    id: "og-combo",
    name: "The OG Combo",
    category: "smash",
    blurb: "The OG with Handcraft fries and a drink.",
    build: ["The OG", "Handcraft fries", "A drink"],
    heat: 1,
    image: IMG.ogCombo,
    badges: ["Most loved"],
  },
  {
    id: "single-ultimate-smash",
    name: "Single Ultimate Smash",
    category: "smash",
    blurb: "One 3 oz smashed beef patty with shaved onions, sharp American cheddar cheese, Handcraft sauce.",
    build: ["Toasted crown", "Handcraft sauce", "Shaved onions", "Sharp American cheddar", "3 oz smashed patty", "Heel"],
    heat: 1,
    image: IMG.smashOg,
    badges: ["Most loved"],
  },
  {
    id: "double-ultimate-smash",
    name: "Double Ultimate Smash",
    category: "smash",
    blurb: "Two 3 oz smashed beef patties with shaved onions, sharp American cheddar cheese, Handcraft sauce.",
    build: [
      "Toasted crown",
      "Handcraft sauce",
      "Shaved onions",
      "Sharp American cheddar",
      "3 oz smashed patty",
      "Sharp American cheddar",
      "3 oz smashed patty",
      "Heel",
    ],
    heat: 1,
    image: IMG.doubleUltimate,
    badges: ["Most loved"],
  },
  {
    id: "hotsy-chili-cheese-tots",
    name: "Hotsy Chili Cheese Tots",
    category: "sides",
    blurb: "Tater tots topped with Garden Catering's Hotsy chili and beer cheese.",
    build: ["Tater tots", "Hotsy chili", "Beer cheese"],
    heat: 2,
    image: IMG.hotsyTots,
    badges: ["Most loved"],
  },
  {
    id: "handcraft-fries",
    name: "Handcraft Fries",
    category: "sides",
    blurb: "One size fits all.",
    build: ["Hand-cut fries", "Signature sauces"],
    heat: 0,
    image: IMG.friesTray,
    badges: ["Most loved"],
  },
  {
    id: "spicy-chicken-sandwich",
    name: "Spicy Chicken Sandwich",
    category: "notbeef",
    blurb: "Crispy chicken, hot spice, shredded romaine lettuce, pickles, ranch.",
    build: ["Toasted crown", "Ranch", "Pickles", "Shredded romaine", "Crispy chicken, hot spice", "Heel"],
    heat: 3,
    image: IMG.spicyChicken,
    badges: ["Most loved"],
  },
  {
    id: "chicken-nuggets",
    name: "6-piece Chicken Nugget",
    category: "notbeef",
    blurb: "Six, crisp, with your choice of sauce.",
    build: ["Six chicken nuggets", "Sauce"],
    heat: 0,
    image: IMG.nuggets,
    badges: ["Most loved"],
  },
  {
    id: "the-ripper",
    name: "The Ripper",
    category: "dogs",
    blurb: "The deep-fried hot dog — fried until the skin splits, which is where the name comes from.",
    build: ["Griddled roll", "Deep-fried split dog"],
    heat: 1,
    image: IMG.brat,
  },
];

export const BY_ID = Object.fromEntries(MENU.map((m) => [m.id, m])) as Record<string, MenuItem>;

/** The ordering site's "Most Loved" eight, in its order. */
export const MOST_LOVED = [
  "og-combo",
  "og",
  "single-ultimate-smash",
  "double-ultimate-smash",
  "hotsy-chili-cheese-tots",
  "handcraft-fries",
  "spicy-chicken-sandwich",
  "chicken-nuggets",
];

/** Rotating spotlight — the burger the month band puts front and centre. */
export const SPOTLIGHT = {
  month: "This Month",
  name: "Double Ultimate Smash",
  itemId: "double-ultimate-smash",
};

/**
 * What to drink with what, for the brew band. The tap list rotates, so these
 * are styles rather than named beers — the counter knows what's pouring.
 */
export const PAIRINGS = [
  { burgerId: "og", beer: "A cold lager", note: "Clean and crisp against two smashed patties and sharp American cheddar." },
  { burgerId: "double-ultimate-smash", beer: "An IPA", note: "Hop bite cuts straight through shaved onion, cheddar and Handcraft sauce." },
  { burgerId: "spicy-chicken-sandwich", beer: "An amber ale", note: "A little malt sweetness to talk the heat down." },
];
