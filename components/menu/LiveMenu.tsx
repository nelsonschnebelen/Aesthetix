import Image from "next/image";
import { HeatMeter } from "@/components/menu/HeatMeter";
import { IMG, img } from "@/lib/images";
import { BY_ID } from "@/lib/menu";
import { SITE } from "@/lib/site";

/**
 * The live menu is the ordering site, reached by deep link. It is not
 * embedded here, and that is deliberate: the ordering app's own checkout
 * store disables checkout when it detects it is running inside an iframe in
 * production, and it shows a preview banner when framed. A frame would let
 * people browse and stop them paying. The deep link is always current, so
 * a change in Toast is a change here with nothing to maintain.
 *
 * Below the handoff, the guest favourites the FAQ names — real names, real
 * photographs, no prices, so nothing can contradict the ordering system.
 */

const FAVOURITES = [
  "classic-single",
  "spicy-ultimate",
  "handcraft-fries",
  "loaded-tots",
  "the-ripper",
  "rotating-ipa",
];

export function LiveMenu() {
  return (
    <>
      <div className="grid items-stretch gap-px bg-bone/12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center bg-char px-6 py-12 md:px-10 md:py-16">
          <p className="label-tech text-gold">Live from the kitchen</p>
          <h2 className="band-head mt-4 text-bone">
            Straight from
            <br />
            the counter<span className="text-ember">.</span>
          </h2>
          <p className="band-copy mt-6 text-bone/65">
            Items, prices and what is actually available today come from our
            ordering system, so what you see is what the kitchen is making.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn bg-gold text-char hover:bg-bone"
            >
              See the menu &amp; order ↗
            </a>
            <a
              href={SITE.phoneHref}
              className="btn border border-bone/35 text-bone hover:bg-bone hover:text-char"
            >
              {SITE.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-bone/40">
            Pickup and delivery, both direct from us. {SITE.priceRange}.
          </p>
        </div>

        <div className="relative min-h-[320px] bg-iron">
          <Image
            src={img(IMG.smashOklahoma, { w: 1000 })}
            alt="A Handcraft double, smashed to order"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="mt-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="band-head text-bone">
            Guest favourites<span className="text-ember">.</span>
          </h2>
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="label-tech text-gold underline-offset-4 hover:underline"
          >
            Full board &amp; prices ↗
          </a>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {FAVOURITES.map((id) => {
            const item = BY_ID[id];
            if (!item) return null;
            return (
              <li
                key={id}
                className="group flex flex-col border border-bone/10 bg-soot transition-colors hover:border-gold/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-iron">
                  {item.image && (
                    <Image
                      src={img(item.image, { w: 800, h: 600 })}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-bone uppercase">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone/55">{item.blurb}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-bone/10 pt-5">
                    <HeatMeter heat={item.heat} />
                    <a
                      href={SITE.orderUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="label-tech text-gold underline-offset-4 hover:underline"
                    >
                      Order ↗
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
