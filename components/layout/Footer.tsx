import Link from "next/link";
import { GriddleStatus } from "@/components/GriddleStatus";
import { Ticker } from "@/components/Ticker";

export function Footer() {
  return (
    <footer className="relative border-t border-bone/10 bg-char">
      <Ticker
        items={["Never frozen", "Smashed to order", "450° flat top", "Sixteen taps", "W 40th Street"]}
        duration={40}
        className="label-tech border-b border-bone/10 py-4 text-bone/35"
      />

      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl text-bone md:text-5xl">
              Hand<span className="text-ember">craft</span>
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-bone/50">
              Smash burgers and brew, made the long way, served the fast way.
              110 West 40th Street, New York.
            </p>
            <GriddleStatus className="mt-7" />
          </div>

          <nav>
            <p className="label-tech mb-5 text-bone/35">Eat</p>
            <ul className="flex flex-col gap-3">
              {[
                ["/menu", "The menu"],
                ["/build", "Build your own"],
                ["/story", "Our story"],
                ["/visit", "Find us"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-bone/70 transition-colors hover:text-ember">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-tech mb-5 text-bone/35">Hours</p>
            <p className="text-bone/70">Monday – Sunday</p>
            <p className="font-display mt-2 text-3xl text-bone">11:00 — 21:00</p>
            <p className="mt-6 text-bone/50">
              <a href="tel:+12125550140" className="transition-colors hover:text-ember">
                (212) 555-0140
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-bone/10 pt-8 text-sm text-bone/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Handcraft Burgers &amp; Brew.</p>
          <p className="label-tech">Concept site · Photography by Unsplash contributors</p>
        </div>
      </div>
    </footer>
  );
}
