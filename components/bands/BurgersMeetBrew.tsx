"use client";

import { useState } from "react";
import Image from "next/image";
import { IMG, img } from "@/lib/images";
import { BY_ID, PAIRINGS } from "@/lib/menu";
import { cn } from "@/lib/utils";

export function BurgersMeetBrew() {
  const [i, setI] = useState(0);
  const pairing = PAIRINGS[i];
  const burger = BY_ID[pairing.burgerId];

  return (
    <section className="bg-soot">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
        <div className="relative min-h-[300px] lg:min-h-[520px]">
          <Image
            src={img(IMG.burgerBrew, { w: 1400 })}
            alt="A Handcraft double beside a cold can of craft beer"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="px-5 py-14 md:px-12 md:py-20">
          <h2 className="band-head text-bone">
            Burgers
            <br />
            meet brew<span className="text-ember">.</span>
          </h2>

          <p className="mt-5 text-lg text-bone/60">Perfect pairings. Every time.</p>

          <div className="mt-7 border-l-2 border-gold pl-6">
            <p className="font-display text-2xl text-bone uppercase">
              {burger?.name} <span className="text-gold">×</span> {pairing.beer}
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-bone/55">{pairing.note}</p>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {PAIRINGS.map((p, n) => (
              <button
                key={p.burgerId}
                type="button"
                onClick={() => setI(n)}
                aria-label={`Pairing ${n + 1}: ${p.beer}`}
                aria-current={n === i}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  n === i ? "bg-gold" : "bg-bone/25 hover:bg-bone/50",
                )}
              />
            ))}
            <button
              type="button"
              onClick={() => setI((n) => (n + 1) % PAIRINGS.length)}
              aria-label="Next pairing"
              className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-bone/30 text-bone transition-colors hover:bg-bone hover:text-char"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
