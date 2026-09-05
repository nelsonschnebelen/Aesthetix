"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import { BY_ID, MOST_LOVED } from "@/lib/menu";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";


/** The deep-red band: a paged rail of the smashes, three up on desktop. */
export function PickYourSmash() {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  }, []);

  const page = (dir: -1 | 1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-oxblood py-14 md:py-20">
      <h2 className="band-head px-5 text-center text-bone md:px-8">
        Pick your smash<span className="text-gold">.</span>
      </h2>

      <div className="relative mt-12">
        {/* Arrows sit outside the rail on desktop, exactly as the reference */}
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous burgers"
          className={cn(
            "absolute top-1/2 left-3 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/45 text-bone transition-opacity md:flex",
            atStart ? "pointer-events-none opacity-25" : "hover:bg-bone hover:text-oxblood",
          )}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="More burgers"
          className={cn(
            "absolute top-1/2 right-3 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/45 text-bone transition-opacity md:flex",
            atEnd ? "pointer-events-none opacity-25" : "hover:bg-bone hover:text-oxblood",
          )}
        >
          ›
        </button>

        <div
          ref={rail}
          onScroll={sync}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 md:px-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {MOST_LOVED.map((id) => {
            const item = BY_ID[id];
            if (!item) return null;
            return (
              <article
                key={id}
                className="group w-[72vw] shrink-0 snap-center text-center sm:w-[44vw] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  {item.image && (
                    <Image
                      src={img(item.image, { w: 900, h: 900 })}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  )}
                </div>

                <h3 className="font-display mt-6 text-3xl text-bone uppercase md:text-4xl">
                  {item.name}
                </h3>

                <a
                  href={SITE.orderUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-tech mt-4 inline-block border border-bone/40 px-6 py-3 text-bone transition-colors hover:border-gold hover:bg-gold hover:text-char"
                >
                  Order ↗
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/menu"
          className="label-tech btn inline-block bg-bone text-char transition-colors hover:bg-gold"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
