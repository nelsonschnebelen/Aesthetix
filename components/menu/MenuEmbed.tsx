import Image from "next/image";
import { IMG, img } from "@/lib/images";
import { SITE } from "@/lib/site";

/**
 * The live menu.
 *
 * The ordering system is the single source of truth for items, prices and
 * what is actually available — none of it is maintained in this repo, so a
 * change there is a change here with no deploy.
 *
 * The handoff panel renders first and always: it is a plain link and cannot
 * fail. The embedded board sits below it, so if the frame is blocked or the
 * ordering app refuses to run cross-origin, the page still leads with a
 * working way to order rather than an empty white box.
 */
export function MenuEmbed() {
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

      {SITE.menuEmbedUrl && (
        <section className="mt-14">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-bone uppercase md:text-4xl">
              The full board
            </h2>
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label-tech text-gold underline-offset-4 hover:underline"
            >
              Trouble loading? Open it in a new tab ↗
            </a>
          </div>
          <div className="overflow-hidden border border-bone/12 bg-paper">
            <iframe
              src={SITE.menuEmbedUrl}
              title={`${SITE.name} menu and online ordering`}
              loading="lazy"
              allow="payment *; geolocation *"
              className="h-[1500px] w-full border-0"
            />
          </div>
        </section>
      )}
    </>
  );
}
