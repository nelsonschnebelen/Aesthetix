import Image from "next/image";
import { GriddleStatus } from "@/components/GriddleStatus";
import { IMG, img } from "@/lib/images";

const FACTS: [string, string][] = [
  ["Address", "110 West 40th Street\nNew York, NY 10018"],
  ["Hours", "Monday – Sunday\n11:00 — 21:00"],
  ["Phone", "(212) 555-0140"],
  ["Nearest train", "B D F M · 42 St – Bryant Park\n90 seconds on foot"],
];

export function VisitSection() {
  return (
    <section id="visit" className="relative bg-char py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="label-tech text-ember">Find us</p>
            <h2 className="font-display mt-5 text-5xl text-bone md:text-7xl">
              One room.
              <br />
              <span className="text-outline">One griddle.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-bone/55">
              Counter service, sixteen taps, no reservations and no intention of
              taking any. Walk in, order at the front, sit anywhere that is
              empty.
            </p>

            <GriddleStatus className="mt-9" />

            <dl className="mt-12 grid gap-px bg-bone/10 sm:grid-cols-2">
              {FACTS.map(([k, v]) => (
                <div key={k} className="bg-char px-5 py-6">
                  <dt className="label-tech text-bone/40">{k}</dt>
                  <dd className="mt-3 leading-relaxed whitespace-pre-line text-bone/85">{v}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://maps.google.com/?q=110+W+40th+St+New+York+NY+10018"
              target="_blank"
              rel="noreferrer noopener"
              className="label-tech mt-10 inline-flex items-center gap-3 bg-bone px-8 py-4 text-char transition-colors hover:bg-ember"
            >
              Open in maps <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-iron">
              <Image
                src={img(IMG.shopFront, { w: 1200, h: 750 })}
                alt="The Handcraft counter on West 40th Street"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-iron">
              <Image
                src={img(IMG.barBulbs, { w: 700, h: 700 })}
                alt="The taps and the bulbs over the pass"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-iron">
              <Image
                src={img(IMG.tableSpread, { w: 700, h: 700 })}
                alt="A table mid-service"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
