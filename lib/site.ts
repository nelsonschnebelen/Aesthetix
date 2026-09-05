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
  /**
   * The live ordering menu — deep-linked straight to the pickup board rather
   * than the bare domain, so a visitor lands on the food.
   *
   * Runs on DoorDash "Tableside Order & Pay" (the bundle loads DoorDash's
   * design system and Stripe), not on Toast — the copy on the site stays
   * provider-neutral so it survives a switch.
   */
  orderUrl: "https://handcraftburgers.menu/pickup?menu=7ee8d6e2-6c5f-449a-9177-dc66599af945",
  clubUrl: "https://handcraftburgers.com/hospitality-club",
  priceRange: "$$ · most items $10–18",

  /**
   * The same menu, embedded below the handoff panel on /menu so the live
   * board is on our own page. Set to null to drop the frame and keep only
   * the handoff.
   *
   * Not verified rendering inside a frame: no X-Frame-Options or
   * frame-ancestors header blocks it, but the ordering app is a Stripe-backed
   * payment flow and those can misbehave in a cross-origin frame. The handoff
   * panel above it always works, so a blank frame degrades to a working page
   * rather than a broken one.
   */
  menuEmbedUrl: "https://handcraftburgers.menu/pickup?menu=7ee8d6e2-6c5f-449a-9177-dc66599af945" as string | null,
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
