"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuCard } from "@/components/menu/MenuCard";
import { CATEGORIES, MENU, type Category } from "@/lib/menu";
import { cn, HEAT_WORDS } from "@/lib/utils";

type Tab = Category | "all";

const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "Everything" },
  ...CATEGORIES.map((c) => ({ id: c.id as Tab, label: c.label })),
];

export function MenuBoard() {
  const [tab, setTab] = useState<Tab>("all");
  const [maxHeat, setMaxHeat] = useState(5);

  const items = useMemo(
    () =>
      MENU.filter((m) => (tab === "all" ? true : m.category === tab)).filter(
        (m) => m.heat <= maxHeat,
      ),
    [tab, maxHeat],
  );

  const note = tab === "all" ? "The whole board." : CATEGORIES.find((c) => c.id === tab)?.note;

  return (
    <div>
      {/* -------------------------------------------------------- filters -- */}
      <div className="sticky top-16 z-30 -mx-6 mb-12 border-y border-bone/10 bg-char/92 px-6 py-4 backdrop-blur-md md:top-20 md:-mx-10 md:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-1 overflow-x-auto pb-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "label-tech relative shrink-0 px-4 py-3 transition-colors",
                  tab === t.id ? "text-char" : "text-bone/60 hover:text-bone",
                )}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute inset-0 bg-gold"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Heat ceiling — filter the board by how much you can take */}
          <div className="flex items-center gap-4">
            <label htmlFor="heat-ceiling" className="label-tech shrink-0 text-bone/45">
              Heat ceiling
            </label>
            <input
              id="heat-ceiling"
              type="range"
              min={0}
              max={5}
              step={1}
              value={maxHeat}
              onChange={(e) => setMaxHeat(Number(e.target.value))}
              className="h-1 w-36 cursor-pointer appearance-none rounded-full bg-bone/15 accent-gold"
            />
            <span
              className={cn(
                "label-tech w-28 shrink-0 whitespace-nowrap",
                maxHeat >= 4 ? "text-ember" : "text-bone/70",
              )}
            >
              {HEAT_WORDS[maxHeat]}
            </span>
          </div>
        </div>
      </div>

      <p className="label-tech mb-8 text-bone/40">
        {note}
        <span className="mx-3 text-bone/20">/</span>
        {items.length} {items.length === 1 ? "item" : "items"}
      </p>

      {/* ---------------------------------------------------------- board -- */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: Math.min(i, 6) * 0.03 }}
            >
              <MenuCard item={item} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <div className="border border-dashed border-bone/15 px-8 py-20 text-center">
          <p className="font-display text-3xl text-bone">Nothing that mild.</p>
          <p className="mt-3 text-bone/50">Raise the heat ceiling and try again.</p>
        </div>
      )}
    </div>
  );
}
