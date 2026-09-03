"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeatMeter } from "@/components/menu/HeatMeter";
import { useCart } from "@/lib/cart";
import { img } from "@/lib/images";
import { BY_ID } from "@/lib/menu";
import { money } from "@/lib/utils";

const FEATURED = [
  "handcraft-double",
  "oklahoma",
  "spicy-ultimate",
  "bacon-crust",
  "smoke-show",
  "crispy-bird",
];

/**
 * Full-bleed horizontal rail. Snap points do the work on touch; the progress
 * bar under it is the only thing JavaScript is responsible for.
 */
export function SignatureRail() {
  const rail = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { add } = useCart();

  const onScroll = () => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section className="relative overflow-hidden bg-char py-24 md:py-32">
      <div className="mx-auto mb-12 flex max-w-[1280px] flex-wrap items-end justify-between gap-6 px-6 md:px-10">
        <div>
          <p className="label-tech text-ember">The board</p>
          <h2 className="font-display mt-5 text-5xl text-bone md:text-7xl">
            Six you should
            <br />
            <span className="text-molten">know about.</span>
          </h2>
        </div>
        <Link
          href="/menu"
          className="label-tech border border-bone/20 px-6 py-4 text-bone/75 transition-colors hover:border-ember hover:text-ember"
        >
          Full menu →
        </Link>
      </div>

      <div
        ref={rail}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FEATURED.map((id, i) => {
          const item = BY_ID[id];
          if (!item) return null;
          return (
            <article
              key={id}
              className="group relative w-[80vw] shrink-0 snap-start sm:w-[52vw] lg:w-[30vw] xl:w-[26vw]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-iron">
                {item.image && (
                  <Image
                    src={img(item.image, { w: 800, h: 1066 })}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 52vw, 28vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-char via-char/25 to-transparent" />

                <span className="font-display absolute top-5 left-5 text-5xl text-bone/25">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <HeatMeter heat={item.heat} showWord={false} className="mb-4" />
                  <h3 className="font-display text-3xl text-bone">{item.name}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-bone/55">
                    {item.blurb}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        add({ key: item.id, name: item.name, price: item.price })
                      }
                      className="label-tech bg-bone px-5 py-3 text-char transition-colors hover:bg-ember"
                    >
                      Add {money(item.price)}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-8 h-px w-[calc(100%-3rem)] max-w-[1280px] bg-bone/10 md:w-[calc(100%-5rem)]">
        <div
          className="h-px bg-ember transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>
    </section>
  );
}
