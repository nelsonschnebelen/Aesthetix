import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ticker } from "@/components/Ticker";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Story",
  description:
    "Burger lovers first: who Chris, Chad and Rev are, what Handcraft is for, and how the room works.",
};

const CHAPTERS = [
  {
    kicker: "Chris, Chad & Rev",
    title: "Burger lovers, first",
    body: "We are burger lovers and we made this place for you. Our founders — Chris, Chad and Rev — each bring decades of NYC restaurant experience and a true love for burgers, and the whole room is built around that one idea.",
    image: IMG.founders,
  },
  {
    kicker: "The mission",
    title: "Fresh, never frozen",
    body: "Hand-crafted, fresh, never-frozen, 100% beef gourmet smashed burgers, with tater tots, french fries and craft beers — served with full hospitality-style service in a quick-service environment. That sentence is the whole business plan.",
    image: IMG.smashOklahoma,
  },
  {
    kicker: "The room",
    title: "Quick service, full hospitality",
    body: "Walk-in only, no reservations. Our focus is delivering a consistently great experience every time you visit — quick service that still behaves like hospitality.",
    image: IMG.smashOg,
  },
];

export default function StoryPage() {
  return (
    <main>
      {/* -------------------------------------------------------- hero -- */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <Image
          src={img(IMG.smashOklahoma, { w: 2000, h: 1200 })}
          alt="Two burgers resting on the pass"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/70 to-char/30" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-32 pb-16 md:px-10 md:pb-24">
          <p className="label-tech text-gold">Bryant Park · West 40th Street</p>
          <h1 className="band-head mt-6 max-w-4xl text-bone">
            We do one thing
            <br />
            <span className="text-gold">an unreasonable</span> number of times
            <span className="text-ember">.</span>
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
                <p className="label-tech text-gold">{c.kicker}</p>
                <h2 className="band-head mt-5 text-bone">{c.title}</h2>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-bone/60">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ----------------------------------------------------- stats -- */}
        <div className="mt-28 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Founders", "3"],
            ["Beef", "100%"],
            ["Most items", "$10–18"],
            ["Freezers", "0"],
          ].map(([k, v]) => (
            <div key={k} className="bg-char px-6 py-10">
              <p className="font-display text-gold text-6xl">{v}</p>
              <p className="label-tech mt-4 text-bone/40">{k}</p>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------- quote -- */}
        <blockquote className="mt-28 border-l-2 border-ember pl-8 md:pl-12">
          <p className="font-display max-w-4xl text-4xl leading-tight text-bone md:text-6xl">
            “We are burger lovers and we made this place for you.”
          </p>
          <footer className="label-tech mt-8 text-bone/40">
            Chris, Chad &amp; Rev · Founders
          </footer>
        </blockquote>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="label-tech bg-gold px-9 py-5 text-char transition-colors hover:bg-bone"
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
