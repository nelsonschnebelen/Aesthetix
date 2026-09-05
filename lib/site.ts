/** Everything factual about the business, in one place. */

export const SITE = {
  name: "Handcraft Burgers & Brew",
  neighbourhood: "Bryant Park",
  phone: "(212) 221-0124",
  phoneHref: "tel:+12122210124",
  street: "110 W 40th St",
  cityLine: "New York, NY 10018",
  mapsUrl:
    "https://google.com/maps/place?q=Handcraft+Burgers+%26+Brew%2C+110+W+40th+St%2C+New+York%2C+NY+10018",
  /** Their own in-house ordering platform — pickup and delivery. */
  orderUrl: "https://handcraftburgers.menu/",
  clubUrl: "https://handcraftburgers.com/hospitality-club",
  priceRange: "$$ · most items $10–18",

  /**
   * The Toast menu widget. Paste the embed URL Toast gives you here and the
   * /menu page switches from the handoff panel to the live widget — the menu
   * then updates itself whenever Toast is updated, with nothing to maintain
   * in this repo.
   *
   * Toast Online Ordering → Settings → "Embed" / "Add to your website".
   * If Toast gives you a <script> tag rather than an iframe URL, paste the
   * src it loads, or send it over and it takes about a minute to wire in.
   */
  menuEmbedUrl: null as string | null,
} as const;

export type HourRow = { days: string; hours: string; dow: number[]; open: number; close: number };

/** Day-of-week is 0 = Sunday, matching Date#getDay. */
export const REGULAR_HOURS: HourRow[] = [
  { days: "Monday – Thursday", hours: "11:00 AM – 9:00 PM", dow: [1, 2, 3, 4], open: 11, close: 21 },
  { days: "Friday – Saturday", hours: "11:00 AM – 10:00 PM", dow: [5, 6], open: 11, close: 22 },
  { days: "Sunday", hours: "11:00 AM – 8:00 PM", dow: [0], open: 11, close: 20 },
];

export const HOLIDAY_HOURS: { day: string; hours: string }[] = [
  { day: "Christmas Eve", hours: "11:00 AM – 8:00 PM" },
  { day: "Christmas Day", hours: "Closed" },
  { day: "New Year's Eve", hours: "11:00 AM – 3:00 PM" },
  { day: "New Year's Day", hours: "11:00 AM – 9:00 PM" },
];

export const TRANSIT = {
  subway: "N Q R W and B D F M lines are right by the restaurant.",
  parking:
    "Street parking is available but limited — follow the posted signs. City Parking at 136 W 40th St is usually the closest and most affordable garage.",
};

export const LEGAL: { label: string; href: string }[] = [
  { label: "Terms of Service", href: "https://pos.toasttab.com/terms-of-service/#diner-tos" },
  { label: "Privacy Statement", href: "https://pos.toasttab.com/privacy" },
  { label: "Do Not Sell My Personal Information", href: "https://handcraftburgers.com/#" },
];
