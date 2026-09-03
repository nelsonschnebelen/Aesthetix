import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ticker } from "@/components/Ticker";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Story",
  description:
    "Why we grind every morning, why the patty is 3oz and not 6, and why the flat top never drops below 450°.",
};

const CHAPTERS = [
  {
    kicker: "2019",
    title: "One griddle, one idea",
    body: "We opened on West 40th with a used flat top, a meat grinder older than most of the staff, and a stubborn conviction that the best burger in the city was also the simplest one. Nothing on the first menu cost more than fourteen dollars. Nothing on it does now either.",
    image: IMG.shopFront,
  },
  {
    kicker: "The beef",
    title: "Ground at seven, gone by nine",
    body: "Chuck and brisket, coarse ground every morning behind the counter, never packed and never frozen. Loose beef is the whole trick: press a tight patty and it steams, press a loose one and every gram touches steel. What we don't sell, we don't keep.",
    image: IMG.cook,
  },
  {
    kicker: "The room",
    title: "Counter service, no ceremony",
    body: "Sixteen taps, a long steel bar, and a kitchen you can watch from anywhere in the room. There are no reservations. There is no host. There is a line most Fridays and we are not sorry about it.",
    image: IMG.diningRoom,
  },
];

export default function StoryPage() {
  return (
    <main>
      {/* -------------------------------------------------------- hero -- */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <Image
          src={img(IMG.griddleDuo, { w: 2000, h: 1200 })}
          alt="Two burgers resting on the pass"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/70 to-char/30" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 pb-16 md:px-10 md:pb-24">
          <p className="label-tech text-ember">Since 2019 · West 40th Street</p>
          <h1 className="font-display mt-6 max-w-4xl text-6xl text-bone md:text-8xl">
            We do one thing
            <br />
            <span className="text-molten">an unreasonable</span> number of times.
          </h1>
        </div>
      </section>

      <Ticker
        items={["Ground daily", "Smashed to order", "450° flat top", "Never frozen"]}
        duration={38}
        className="label-tech border-y border-bone/10 bg-soot py-4 text-bone/40"
      />

      {/* ---------------------------------------------------- chapters -- */}
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-24 md:gap-36">
          {CHAPTERS.map((c, i) => (
            <article
              key={c.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="relative aspect-[4/3] overflow-hidden bg-iron">
                <Image
                  src={img(c.image, { w: 1100, h: 825 })}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <div>
                <p className="label-tech text-ember">{c.kicker}</p>
                <h2 className="font-display mt-5 text-4xl text-bone md:text-6xl">{c.title}</h2>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-bone/60">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ----------------------------------------------------- stats -- */}
        <div className="mt-28 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Patties a day", "1,400"],
            ["Griddle temp", "450°F"],
            ["Taps", "16"],
            ["Freezers", "0"],
          ].map(([k, v]) => (
            <div key={k} className="bg-char px-6 py-10">
              <p className="font-display text-molten text-6xl">{v}</p>
              <p className="label-tech mt-4 text-bone/40">{k}</p>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------- quote -- */}
        <blockquote className="mt-28 border-l-2 border-ember pl-8 md:pl-12">
          <p className="font-display max-w-4xl text-4xl leading-tight text-bone md:text-6xl">
            “A thick burger is a steak that lost its nerve. A smash burger is
            all crust and no apology.”
          </p>
          <footer className="label-tech mt-8 text-bone/40">
            Marisol Reyes · Head of the pass since day one
          </footer>
        </blockquote>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="label-tech bg-ember px-8 py-5 text-char transition-colors hover:bg-flame"
          >
            See the menu →
          </Link>
          <Link
            href="/visit"
            className="label-tech border border-bone/20 px-8 py-5 text-bone/75 transition-colors hover:border-bone hover:text-bone"
          >
            Come in
          </Link>
        </div>
      </div>
    </main>
  );
}
