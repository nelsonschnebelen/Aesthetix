"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HeatMeter } from "@/components/menu/HeatMeter";
import { useCart } from "@/lib/cart";
import { img } from "@/lib/images";
import type { MenuItem } from "@/lib/menu";
import { cn, money } from "@/lib/utils";

/**
 * Every item is a build, so every card can turn into its spec sheet: the
 * layers listed bottom-up exactly as they are assembled on the pass.
 */
export function MenuCard({
  item,
  priority = false,
}: {
  item: MenuItem;
  priority?: boolean;
}) {
  const [spec, setSpec] = useState(false);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const onAdd = () => {
    add({
      key: item.id,
      name: item.name,
      price: item.price,
      note: item.heat >= 4 ? "Hot" : undefined,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group relative flex flex-col border border-bone/10 bg-soot transition-colors duration-300 hover:border-gold/45">
      <div className="relative aspect-[4/3] overflow-hidden bg-iron">
        {!item.image && (
          <div className="griddle-steel absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
            <span aria-hidden className="text-3xl text-gold/70">
              ◈
            </span>
            <span className="label-tech text-bone/45">Photo on the way</span>
          </div>
        )}
        {item.image && (
          <Image
            src={img(item.image, { w: 800, h: 600 })}
            alt={item.name}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-soot via-transparent to-transparent" />

        {item.badges?.length ? (
          <div className="absolute top-3 left-3 flex gap-2">
            {item.badges.map((b) => (
              <span
                key={b}
                className={cn(
                  "label-tech px-2.5 py-1.5",
                  b === "Five alarm" || b === "Hot"
                    ? "bg-ember text-char"
                    : "bg-bone/90 text-char",
                )}
              >
                {b}
              </span>
            ))}
          </div>
        ) : null}

        {/* Spec sheet */}
        <AnimatePresence>
          {spec && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute inset-0 overflow-y-auto bg-char/94 backdrop-blur-[2px]"
            >
              {/* min-h-full on the inner block keeps it centred when it fits
                  and scrollable from the top when it does not. */}
              <div className="flex min-h-full flex-col justify-center px-6 py-5">
                <p className="label-tech mb-3 text-gold">Build · bottom up</p>
                <ol className="flex flex-col-reverse gap-1">
                  {item.build.map((layer, i) => (
                    <li key={layer + i} className="flex items-baseline gap-3">
                      <span className="font-mono-tech text-[10px] text-bone/30">
                        {String(item.build.length - i).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-bone/85">{layer}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-bone">{item.name}</h3>
          <span className="font-mono-tech shrink-0 text-lg text-gold">
            {money(item.price)}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-bone/55">
          {item.blurb}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <HeatMeter heat={item.heat} />
          <span className="font-mono-tech text-[11px] text-bone/35">
            {item.spec.patties > 0
              ? `${item.spec.patties}×${item.spec.ozEach}oz · ${item.spec.sear} @ ${item.spec.temp}°`
              : `${item.spec.ozEach}oz · ${item.spec.sear} @ ${item.spec.temp}°`}
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3 pt-5 border-t border-bone/10">
          <button
            type="button"
            onClick={onAdd}
            className={cn(
              "label-tech flex-1 px-4 py-3.5 transition-colors",
              added
                ? "bg-bone text-char"
                : "bg-bone text-char hover:bg-gold",
            )}
          >
            {added ? "On the pass ✓" : `Add ${money(item.price)}`}
          </button>
          <button
            type="button"
            onClick={() => setSpec((v) => !v)}
            aria-pressed={spec}
            className="label-tech border border-bone/20 px-4 py-3.5 text-bone/70 transition-colors hover:border-gold hover:text-gold"
          >
            {spec ? "Close" : "Build"}
          </button>
        </div>
      </div>
    </article>
  );
}
