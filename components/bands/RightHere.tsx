import Image from "next/image";
import { GriddleStatus } from "@/components/GriddleStatus";
import { IMG, img } from "@/lib/images";

const HOURS: [string, string][] = [
  ["Mon – Thu", "11:00 — 21:00"],
  ["Fri – Sat", "11:00 — 22:00"],
  ["Sunday", "11:00 — 20:00"],
];

export function RightHere() {
  return (
    <section id="visit" className="bg-char py-14 md:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.55fr]">
        <div>
          <h2 className="band-head text-bone">
            Right here.
            <br />
            Take it anywhere<span className="text-ember">.</span>
          </h2>

          <address className="mt-8 flex items-start gap-3 not-italic text-bone/80">
            <span aria-hidden className="mt-1 text-gold">
              ◈
            </span>
            <span className="leading-relaxed">
              110 West 40th Street
              <br />
              New York, NY 10018
            </span>
          </address>

          <dl className="mt-7 space-y-2">
            {HOURS.map(([d, h]) => (
              <div key={d} className="flex gap-6 text-sm">
                <dt className="label-tech w-24 shrink-0 text-bone/45">{d}</dt>
                <dd className="font-mono-tech text-bone/85">{h}</dd>
              </div>
            ))}
          </dl>

          <GriddleStatus className="mt-7" />

          <a
            href="https://maps.google.com/?q=110+W+40th+St+New+York+NY+10018"
            target="_blank"
            rel="noreferrer noopener"
            className="label-tech mt-8 inline-block border border-bone/35 px-8 py-4 text-bone transition-colors hover:bg-bone hover:text-char"
          >
            Get directions
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img(IMG.storefront, { w: 900 })}
              alt="The Handcraft storefront on West 40th Street at dusk"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={img(IMG.streetPark, { w: 900 })}
              alt="The block beside Bryant Park"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
