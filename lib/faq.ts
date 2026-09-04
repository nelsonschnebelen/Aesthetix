import { SITE, TRANSIT } from "@/lib/site";

export type Faq = {
  q: string;
  /** Paragraphs. Anything in `links` is rendered as a real anchor after them. */
  a: string[];
  links?: { label: string; href: string }[];
};

export const FAQS: Faq[] = [
  {
    q: "What are your hours of operation?",
    a: [
      "Monday – Thursday: 11am to 9pm. Friday – Saturday: 11am to 10pm. Sunday: 11am to 8pm.",
      "Holiday hours: Christmas Eve 11am to 8pm. Christmas Day closed. New Year's Eve 11am to 3pm. New Year's Day 11am to 9pm.",
    ],
  },
  {
    q: "Where are you located and how do I get there?",
    a: [
      `Our address is ${SITE.street}, ${SITE.cityLine}, near Bryant Park.`,
      TRANSIT.parking,
      `Subway access is easy — ${TRANSIT.subway}`,
    ],
    links: [{ label: "Open in maps", href: SITE.mapsUrl }],
  },
  {
    q: "Do you offer online ordering, delivery, or pickup?",
    a: [
      "Yes. You can order directly from us on our in-house ordering platform, for pickup or delivery.",
    ],
    links: [{ label: "Order online", href: SITE.orderUrl }],
  },
  {
    q: "Do you take reservations, or is it walk-in only?",
    a: [
      "We are walk-in only. No reservations needed — but you can order ahead to save time.",
    ],
    links: [{ label: "Order ahead", href: SITE.orderUrl }],
  },
  {
    q: "What's on your menu, and what are your most popular items?",
    a: [
      "Guest favourites include the OG Handcraft, the Ultimate Smash, our French Fries, Signature Sauces, Loaded Tots, the Ripper deep-fried hot dog, and our rotating craft brews.",
    ],
    links: [{ label: "View the full menu", href: SITE.orderUrl }],
  },
  {
    q: "Do you have vegetarian, vegan, gluten-free, or allergy-friendly options?",
    a: [
      "Yes — we clearly mark all dietary options on our menu. If you have an allergy, our team is always happy to help guide you.",
    ],
    links: [{ label: "Allergen guide", href: SITE.orderUrl }],
  },
  {
    q: "What is your price range?",
    a: [
      "We're generally in the $$ range. Most items fall between 10 and 18 dollars.",
    ],
  },
  {
    q: "Do you offer catering, private events, or large party reservations?",
    a: ["At this time we do not offer catering or private events."],
  },
  {
    q: "Is parking available?",
    a: [
      "Street parking is available but limited. The closest garage option is City Parking at 136 W 40th Street. Please check signage and fees before parking.",
    ],
  },
  {
    q: "What makes your restaurant unique?",
    a: [
      "We are burger lovers and we made this place for you. Our mission is to bring you hand-crafted, fresh, never-frozen, 100% beef gourmet smashed burgers with tater tots, french fries and craft beers — served with full hospitality-style service in a quick-service environment.",
      "Our founders Chris, Chad and Rev each bring decades of NYC restaurant experience and a true love for burgers.",
      "Our focus is delivering a consistently great experience every time you visit.",
    ],
  },
];
