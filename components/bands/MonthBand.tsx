import Image from "next/image";
import Link from "next/link";
import { IMG, img } from "@/lib/images";
import { BY_ID, SPOTLIGHT } from "@/lib/menu";
import { SITE } from "@/lib/site";

/** The mustard band: the burger of the month, described exactly as the menu does. */
export function MonthBand() {
  const featured = BY_ID[SPOTLIGHT.itemId];
  return (
    <section id="month" className="relative overflow-hidden bg-mustard py-14 md:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr_0.7fr]">
        <div>
          <h2 className="band-head text-char">
            This month&rsquo;s
            <br />
            Handcraft<span className="text-oxblood">.</span>
          </h2>

          <p className="mt-6 max-w-md leading-relaxed text-char/80">{featured?.blurb}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label-tech btn inline-block bg-char text-bone transition-colors hover:bg-oxblood"
            >
              Order it ↗
            </a>
            <Link
              href="/menu"
              className="label-tech btn inline-block border-2 border-char text-char transition-colors hover:bg-char hover:text-bone"
            >
              See the menu
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden">
          <Image
            src={img(featured?.image ?? IMG.smashOklahoma, { w: 900 })}
            alt={`${SPOTLIGHT.name}, this month's Handcraft`}
            fill
            sizes="(max-width: 1024px) 80vw, 30vw"
            className="object-cover"
          />
        </div>

        {/* The pinned index card, tilted the way the reference has it */}
        <div className="mx-auto w-full max-w-[290px] rotate-[3deg] bg-paper px-7 py-9 text-center shadow-[0_18px_40px_rgba(19,17,16,0.28)]">
          <p className="label-tech text-char/55">Most loved this month</p>
          <p className="font-display mt-5 text-[1.75rem] leading-[0.95] text-char uppercase text-balance">
            {SPOTLIGHT.name}
          </p>
          <p aria-hidden className="mt-5 text-2xl text-oxblood">
            ♥
          </p>
        </div>
      </div>
    </section>
  );
}
