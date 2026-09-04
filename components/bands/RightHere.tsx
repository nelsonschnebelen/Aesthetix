import Image from "next/image";
import Link from "next/link";
import { GriddleStatus } from "@/components/GriddleStatus";
import { IMG, img } from "@/lib/images";
import { HOLIDAY_HOURS, REGULAR_HOURS, SITE, TRANSIT } from "@/lib/site";

export function RightHere() {
  return (
    <section id="visit" className="bg-char py-14 md:py-20">
      <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1.4fr]">
        <div>
          <h2 className="band-head text-bone">
            Right here.
            <br />
            Take it anywhere<span className="text-ember">.</span>
          </h2>

          <address className="mt-6 flex items-start gap-3 not-italic text-bone/85">
            <span aria-hidden className="mt-1 text-gold">
              ◈
            </span>
            <span className="leading-relaxed">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:text-gold hover:underline"
              >
                {SITE.street}
                <br />
                {SITE.cityLine}
              </a>
              <br />
              <a
                href={SITE.phoneHref}
                className="mt-2 inline-block underline-offset-4 hover:text-gold hover:underline"
              >
                {SITE.phone}
              </a>
            </span>
          </address>

          <GriddleStatus className="mt-6" />

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn bg-gold text-char hover:bg-bone"
            >
              Order Online
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn border border-bone/35 text-bone hover:bg-bone hover:text-char"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="label-tech mb-4 text-gold">Hours</p>
              <dl className="space-y-2.5">
                {REGULAR_HOURS.map((r) => (
                  <div key={r.days} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-bone/10 pb-2.5">
                    <dt className="text-sm text-bone/60">{r.days}</dt>
                    <dd className="font-mono-tech text-sm text-bone/90">{r.hours}</dd>
                  </div>
                ))}
              </dl>

              <p className="label-tech mt-6 mb-3 text-bone/45">Holiday hours</p>
              <dl className="space-y-2">
                {HOLIDAY_HOURS.map((h) => (
                  <div key={h.day} className="flex flex-wrap justify-between gap-x-6 gap-y-1">
                    <dt className="text-sm text-bone/50">{h.day}</dt>
                    <dd className="font-mono-tech text-sm text-bone/70">{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="label-tech mb-4 text-gold">Getting here</p>
              <p className="text-sm leading-relaxed text-bone/65">{TRANSIT.subway}</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/65">{TRANSIT.parking}</p>
              <p className="mt-5 text-sm text-bone/45">
                Walk-in only — no reservations needed.
              </p>
              <Link
                href="/faq"
                className="label-tech mt-5 inline-block text-gold underline-offset-4 hover:underline"
              >
                More questions →
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img(IMG.storefront, { w: 900 })}
                alt="The Handcraft storefront on West 40th Street"
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
      </div>
    </section>
  );
}
