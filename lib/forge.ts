/** Ingredient library for The Forge — the build-your-own griddle. */

export type Group = "bun" | "cheese" | "sauce" | "topping";

export type Ingredient = {
  id: string;
  name: string;
  group: Group;
  heat: number;
  /** Stack order, bottom of the burger up. Patties sit at 30. */
  order: number;
  /** Rendered thickness in px at 1× scale. */
  thickness: number;
  /** Rendered width in px — the silhouette is what sells it. */
  width: number;
  /** CSS background for the layer. */
  fill: string;
  radius?: string;
  /** Word the name generator may borrow. */
  epithet?: string;
};

export const PATTY = {
  thickness: 26,
  width: 288,
  fill: "radial-gradient(120% 160% at 50% 30%, #8a4a25 0%, #5a2c15 55%, #2b1409 100%)",
};

export const INGREDIENTS: Ingredient[] = [
  // ------------------------------------------------------------- buns ----
  {
    id: "brioche",
    name: "Toasted brioche",
    group: "bun",
    heat: 0,
    order: 0,
    thickness: 30,
    width: 280,
    fill: "linear-gradient(180deg,#e0a256,#c07f36)",
  },
  {
    id: "potato",
    name: "Potato roll",
    group: "bun",
    heat: 0,
    order: 0,
    thickness: 32,
    width: 276,
    fill: "linear-gradient(180deg,#efc47f,#d19a4e)",
  },
  {
    id: "lettuce-wrap",
    name: "Lettuce wrap",
    group: "bun",
    heat: 0,
    order: 0,
    thickness: 22,
    width: 290,
    fill: "linear-gradient(180deg,#7fae4a,#4d7a2a)",
    epithet: "Naked",
  },

  // ----------------------------------------------------------- cheese ----
  {
    id: "american",
    name: "Sharp American",
    group: "cheese",
    heat: 0,
    order: 34,
    thickness: 9,
    width: 300,
    fill: "linear-gradient(180deg,#ffcf5c,#f0a11b)",
    radius: "4px",
  },
  {
    id: "cheddar",
    name: "Aged cheddar",
    group: "cheese",
    heat: 0,
    order: 34,
    thickness: 9,
    width: 300,
    fill: "linear-gradient(180deg,#f0a83a,#d97d10)",
    radius: "4px",
  },
  {
    id: "pepperjack",
    name: "Pepper jack",
    group: "cheese",
    heat: 2,
    order: 34,
    thickness: 9,
    width: 300,
    fill: "linear-gradient(180deg,#f7e2a8,#dcb64f)",
    radius: "4px",
    epithet: "Jack",
  },
  {
    id: "blue",
    name: "Point Reyes blue",
    group: "cheese",
    heat: 0,
    order: 34,
    thickness: 10,
    width: 286,
    fill: "linear-gradient(180deg,#eae6da,#c9c3b2)",
    radius: "6px",
    epithet: "Blue",
  },

  // ------------------------------------------------------------ sauce ----
  {
    id: "handcraft-sauce",
    name: "Handcraft sauce",
    group: "sauce",
    heat: 0,
    order: 60,
    thickness: 8,
    width: 268,
    fill: "linear-gradient(180deg,#f7b98a,#e08a4e)",
    radius: "999px",
  },
  {
    id: "sriracha-mayo",
    name: "Sriracha mayo",
    group: "sauce",
    heat: 3,
    order: 60,
    thickness: 8,
    width: 268,
    fill: "linear-gradient(180deg,#ff8f6b,#e2452a)",
    radius: "999px",
    epithet: "Sriracha",
  },
  {
    id: "chipotle",
    name: "Chipotle crema",
    group: "sauce",
    heat: 3,
    order: 60,
    thickness: 8,
    width: 268,
    fill: "linear-gradient(180deg,#e9805a,#b8452a)",
    radius: "999px",
    epithet: "Chipotle",
  },
  {
    id: "mustard",
    name: "Yellow mustard",
    group: "sauce",
    heat: 1,
    order: 60,
    thickness: 6,
    width: 262,
    fill: "linear-gradient(180deg,#ffd93d,#e0a800)",
    radius: "999px",
  },
  {
    id: "onion-jam",
    name: "Bourbon onion jam",
    group: "sauce",
    heat: 0,
    order: 60,
    thickness: 10,
    width: 266,
    fill: "linear-gradient(180deg,#a05a2c,#6b3618)",
    radius: "999px",
    epithet: "Bourbon",
  },

  // ---------------------------------------------------------- toppings ---
  {
    id: "romaine",
    name: "Shredded romaine",
    group: "topping",
    heat: 0,
    order: 10,
    thickness: 12,
    width: 306,
    fill: "linear-gradient(180deg,#95c757,#5c8f33)",
    radius: "999px",
  },
  {
    id: "onion",
    name: "Shaved onion",
    group: "topping",
    heat: 0,
    order: 14,
    thickness: 8,
    width: 288,
    fill: "linear-gradient(180deg,#f6f1e6,#d9d2c4)",
    radius: "999px",
  },
  {
    id: "bacon",
    name: "Thick-cut bacon",
    group: "topping",
    heat: 0,
    order: 40,
    thickness: 12,
    width: 296,
    fill: "repeating-linear-gradient(96deg,#8f2f1c 0 10px,#c4643f 10px 18px)",
    radius: "4px",
    epithet: "Bacon",
  },
  {
    id: "egg",
    name: "Fried egg",
    group: "topping",
    heat: 0,
    order: 44,
    thickness: 14,
    width: 292,
    fill: "radial-gradient(circle at 50% 50%, #ffc93c 0 22%, #fdf6e3 22% 100%)",
    radius: "999px",
    epithet: "Sunrise",
  },
  {
    id: "pickles",
    name: "Dill pickles",
    group: "topping",
    heat: 0,
    order: 48,
    thickness: 9,
    width: 274,
    fill: "linear-gradient(180deg,#93b23c,#5e7a1f)",
    radius: "999px",
  },
  {
    id: "jalapeno",
    name: "Pickled jalapeños",
    group: "topping",
    heat: 4,
    order: 50,
    thickness: 9,
    width: 268,
    fill: "linear-gradient(180deg,#79b32e,#39631a)",
    radius: "999px",
    epithet: "Jalapeño",
  },
  {
    id: "hatch",
    name: "Roasted Hatch chile",
    group: "topping",
    heat: 3,
    order: 50,
    thickness: 11,
    width: 272,
    fill: "linear-gradient(180deg,#5f8f2c,#2f5312)",
    radius: "999px",
    epithet: "Hatch",
  },
  {
    id: "serrano",
    name: "Charred serrano",
    group: "topping",
    heat: 5,
    order: 52,
    thickness: 8,
    width: 258,
    fill: "linear-gradient(180deg,#3f6b1d,#1c3409)",
    radius: "999px",
    epithet: "Five Alarm",
  },
  {
    id: "tomato",
    name: "Vine tomato",
    group: "topping",
    heat: 0,
    order: 54,
    thickness: 13,
    width: 292,
    fill: "radial-gradient(circle at 50% 50%, #ff8b6b 0 34%, #d43b23 34% 100%)",
    radius: "999px",
  },
  {
    id: "shallot",
    name: "Crispy shallot",
    group: "topping",
    heat: 0,
    order: 56,
    thickness: 10,
    width: 266,
    fill: "repeating-linear-gradient(100deg,#c78a3f 0 6px,#8a5520 6px 11px)",
    radius: "999px",
    epithet: "Frizzled",
  },
];

export const BY_GROUP = {
  bun: INGREDIENTS.filter((i) => i.group === "bun"),
  cheese: INGREDIENTS.filter((i) => i.group === "cheese"),
  sauce: INGREDIENTS.filter((i) => i.group === "sauce"),
  topping: INGREDIENTS.filter((i) => i.group === "topping"),
};

export const ING_BY_ID = Object.fromEntries(INGREDIENTS.map((i) => [i.id, i])) as Record<
  string,
  Ingredient
>;

/**
 * Names the build from whatever is loudest about it. Deterministic, so the
 * same burger always earns the same name — people screenshot these.
 */
export function nameBuild(opts: {
  patties: number;
  cheeseId: string | null;
  sauceIds: string[];
  toppingIds: string[];
  heat: number;
}): string {
  const count = ["The Empty", "The Single", "The Double", "The Triple", "The Quad"][
    Math.min(opts.patties, 4)
  ];

  if (opts.patties === 0) return "The Sad Salad";

  const chosen = [opts.cheeseId, ...opts.sauceIds, ...opts.toppingIds]
    .filter((id): id is string => Boolean(id))
    .map((id) => ING_BY_ID[id])
    .filter((i) => i?.epithet)
    .sort((a, b) => b.heat - a.heat);

  if (opts.heat >= 5) return `${count} Five Alarm`;
  if (chosen.length === 0) {
    return opts.patties >= 3 ? `${count} Threat` : `${count} Straight`;
  }
  return `${count} ${chosen[0].epithet}`;
}
