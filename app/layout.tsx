import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollMotion } from "@/components/motion/ScrollMotion";
import { REGULAR_HOURS, SITE } from "@/lib/site";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const neon = Kaushan_Script({
  variable: "--font-neon-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Handcraft — Smash Burgers & Brew",
    template: "%s · Handcraft",
  },
  description:
    "Hand-crafted, fresh, never-frozen 100% beef smashed burgers with tater tots, french fries and craft beers — full hospitality in a quick-service room. 110 W 40th St, near Bryant Park.",
  openGraph: {
    title: "Handcraft — Smash Burgers & Brew",
    description:
      "Never frozen. Smashed to order. 110 West 40th Street, New York.",
    type: "website",
  },
};

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Local-business markup so search shows the right hours, phone and address. */
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  servesCuisine: ["Burgers", "American"],
  priceRange: "$$",
  telephone: SITE.phone,
  url: SITE.orderUrl,
  hasMenu: SITE.orderUrl,
  acceptsReservations: "False",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10018",
    addressCountry: "US",
  },
  openingHoursSpecification: REGULAR_HOURS.map((r) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: r.dow.map((d) => DAY_NAMES[d]),
    opens: `${String(r.open).padStart(2, "0")}:00`,
    closes: `${String(r.close).padStart(2, "0")}:00`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${mono.variable} ${neon.variable}`}>
      <head>
        {/* Pre-paint engine gate: the cinematic layout must exist before the
            first frame, or the still hero flashes. Never under reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('cine-on')}catch(e){}",
          }}
        />
      </head>
      <body className="grain min-h-screen bg-char font-sans text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <ScrollMotion />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
