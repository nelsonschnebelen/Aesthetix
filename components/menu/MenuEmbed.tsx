import Image from "next/image";
import { IMG, img } from "@/lib/images";
import { SITE } from "@/lib/site";

/**
 * The live Toast menu. Toast is the single source of truth for items and
 * prices — nothing about the menu is maintained in this repo, so a change in
 * Toast is a change on the site with no deploy.
 *
 * Until the embed URL is set in lib/site.ts, this renders a handoff panel
 * rather than a stale hardcoded list that could contradict the real prices.
 */
export function MenuEmbed() {
  if (SITE.menuEmbedUrl) {
    return (
      <div className="overflow-hidden border border-bone/12 bg-paper">
        <iframe
          src={SITE.menuEmbedUrl}
          title={`${SITE.name} menu and online ordering`}
          loading="lazy"
          className="h-[1400px] w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="grid items-stretch gap-px bg-bone/12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-center bg-char px-6 py-12 md:px-10 md:py-16">
        <p className="label-tech text-gold">Live from the kitchen</p>
        <h2 className="band-head mt-4 text-bone">
          The board lives
          <br />
          on Toast<span className="text-ember">.</span>
        </h2>
        <p className="band-copy mt-6 text-bone/65">
          Items, prices and what is actually available today come straight from
          our ordering system, so what you see is what the kitchen is making.
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
          Pickup and delivery, both from us directly. {SITE.priceRange}.
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
  );
}
