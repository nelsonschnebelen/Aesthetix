"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The Method: a pinned griddle on the left, four steps scrubbing past on the
 * right. The patty is drawn entirely in CSS — no sprite sheet, no video — so
 * it stays crisp at any size and costs nothing to load.
 */

type Step = {
  n: string;
  title: string;
  body: string;
  temp: string;
  clock: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "The ball",
    body: "Three ounces of chuck and brisket, coarse ground each morning and rolled by hand. It is never pressed, never packed, never frozen. Loose beef is what lets the crust happen later.",
    temp: "38°F",
    clock: "0:00",
  },
  {
    n: "02",
    title: "The smash",
    body: "The ball lands on 450° steel and a weighted iron comes down for eleven seconds. Not ten. Eleven. Long enough to force every gram into contact with the metal, short enough that nothing is squeezed out.",
    temp: "450°F",
    clock: "0:11",
  },
  {
    n: "03",
    title: "The crust",
    body: "Maillard across one hundred percent of the surface — the lace-crisp brown edge that a thick pub patty can never produce, because a thick patty never touches enough steel at once.",
    temp: "450°F",
    clock: "1:22",
  },
  {
    n: "04",
    title: "The stack",
    body: "Cheese goes on at sixty seconds so it melts into the crust rather than sliding off it. Bun heels steam on the back of the flat top. The whole thing is wrapped inside four minutes of the order landing.",
    temp: "450°F",
    clock: "1:36",
  },
];

export function SmashMethod() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(STEPS.length - 1, Math.max(0, Math.floor(p * STEPS.length))));
  });

  const heatWidth = useTransform(scrollYProgress, [0, 0.28, 1], ["4%", "72%", "100%"]);
  const glow = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0.85, 0.6]);

  // Patty geometry per step: a ball that gets driven flat and wide.
  const patty = [
    { width: 132, height: 132, radius: 999 },
    { width: 276, height: 52, radius: 999 },
    { width: 312, height: 40, radius: 999 },
    { width: 312, height: 40, radius: 999 },
  ][active];

  return (
    <section
      ref={ref}
      id="method"
      className="relative bg-char"
      style={{ minHeight: `${STEPS.length * 78}vh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="mx-auto grid h-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
          {/* ------------------------------------------------ the griddle -- */}
          <div className="relative order-2 md:order-1">
            <p className="label-tech mb-8 text-gold">The Method</p>

            <div className="griddle-steel relative flex h-[240px] items-center justify-center overflow-hidden border border-bone/10 md:h-[300px]">
              {/* Heat bloom under the patty */}
              <motion.div
                aria-hidden
                style={{ opacity: glow }}
                className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[420px] -translate-x-1/2 rounded-[100%] bg-ember/35 blur-3xl"
              />

              {/* Steam / sizzle motes */}
              {active >= 1 && (
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="sizzle-mote absolute bottom-[46%] h-1 w-1 rounded-full bg-bone/55"
                      style={{
                        left: `${28 + i * 8.5}%`,
                        ["--dx" as string]: `${(i % 2 ? 1 : -1) * (8 + i * 3)}px`,
                        ["--dur" as string]: `${5 + i * 0.7}s`,
                        ["--delay" as string]: `${i * 0.6}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* The stack, bottom up */}
              <div className="relative flex scale-[0.82] flex-col items-center justify-end sm:scale-100">
                {/* Bun crown + cheese arrive only at the last step */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: active === 3 ? 1 : 0,
                    y: active === 3 ? 0 : -28,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  className="mb-1 h-[52px] w-[304px] rounded-t-[999px] bg-gradient-to-b from-[#e0a256] to-[#c07f36] shadow-[inset_0_-6px_10px_rgba(0,0,0,0.25)]"
                />
                <motion.div
                  initial={false}
                  animate={{
                    opacity: active === 3 ? 1 : 0,
                    scaleY: active === 3 ? 1 : 0.2,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mb-[-6px] h-3 w-[322px] origin-top rounded-[4px] bg-gradient-to-b from-[#ffcf5c] to-[#f0a11b]"
                />

                {/* The patty itself */}
                <motion.div
                  initial={false}
                  animate={{
                    width: patty.width,
                    height: patty.height,
                    borderRadius: patty.radius,
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className={cn(
                    "relative z-10 overflow-visible",
                    active >= 2
                      ? "shadow-[0_0_0_3px_#2b1409,0_0_28px_rgba(255,77,13,0.45)]"
                      : "shadow-[0_10px_30px_rgba(0,0,0,0.6)]",
                  )}
                  style={{
                    backgroundImage:
                      active >= 2
                        ? "radial-gradient(120% 160% at 50% 30%, #8a4a25 0%, #5a2c15 55%, #2b1409 100%)"
                        : "radial-gradient(120% 160% at 40% 25%, #9c5230 0%, #6b3419 60%, #3d1c0e 100%)",
                  }}
                >
                  {/* Lace edge: the crust reaching past the patty */}
                  {active >= 2 && (
                    <span
                      aria-hidden
                      className="absolute inset-x-[-14px] top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#3a1a0b] opacity-90 blur-[2px]"
                    />
                  )}
                </motion.div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: active === 3 ? 1 : 0,
                    height: active === 3 ? 28 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  className="mt-1 w-[298px] overflow-hidden rounded-b-[999px] bg-gradient-to-b from-[#d99a52] to-[#b57430]"
                />
              </div>
            </div>

            {/* Sear gauge */}
            <div className="mt-6">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="label-tech text-bone/45">Surface temperature</span>
                <span className="font-mono-tech text-sm text-gold">{STEPS[active].temp}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden bg-bone/10">
                <motion.div
                  style={{ width: heatWidth }}
                  className="h-full bg-gradient-to-r from-crust via-gold to-ember"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------- the steps -- */}
          <div className="order-1 md:order-2">
            <div className="mb-8 flex items-baseline gap-4">
              <motion.span
                key={STEPS[active].n}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-display text-gold text-5xl md:text-7xl"
              >
                {STEPS[active].n}
              </motion.span>
              <span className="font-mono-tech text-sm text-bone/40">
                {STEPS[active].clock}
              </span>
            </div>

            <motion.h2
              key={STEPS[active].title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="band-head text-bone"
            >
              {STEPS[active].title}
            </motion.h2>

            <motion.p
              key={STEPS[active].body}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-bone/60"
            >
              {STEPS[active].body}
            </motion.p>

            {/* Step rail */}
            <ol className="mt-10 flex gap-2">
              {STEPS.map((s, i) => (
                <li key={s.n} className="flex-1">
                  <span
                    className={cn(
                      "block h-px transition-colors duration-300",
                      i <= active ? "bg-gold" : "bg-bone/15",
                    )}
                  />
                  <span
                    className={cn(
                      "label-tech mt-3 block transition-colors duration-300",
                      i === active ? "text-bone" : "text-bone/30",
                    )}
                  >
                    {s.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
