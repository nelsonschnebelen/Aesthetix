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
   * The live ordering menu. The root URL, deliberately, not the deep
   * /pickup?menu=<guid> link: the root returns a real 200, the deep link is
   * a 404 at the origin that only works because the app is a client-routed
   * SPA (link checkers and link previews choke on it), and the root cannot
   * go stale if the menu is ever re-published under a new GUID.
   *
   * The menu is managed in Toast and served through a DoorDash (Bbot) Order
   * & Pay front-end. The copy on the site names neither, so it survives a
   * change on either side.
   */
  orderUrl: "https://handcraftburgers.menu/",
  clubUrl: "https://handcraftburgers.com/hospitality-club",
  priceRange: "$$ · most items $10–18",

  /*
   * There is deliberately no embed URL. The ordering app's checkout store
   * disables checkout in production when it detects it is inside an iframe
   * (window.location !== window.parent.location), and it shows a preview
   * banner when framed. Embedding it would let people browse and stop them
   * paying. Link to it; never frame it.
   */
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
