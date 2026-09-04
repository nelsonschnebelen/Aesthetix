"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeatMeter } from "@/components/menu/HeatMeter";
import { useCart } from "@/lib/cart";
import {
  BY_GROUP,
  ING_BY_ID,
  nameBuild,
  PATTY,
  type Ingredient,
} from "@/lib/forge";
import { cn, money } from "@/lib/utils";

type Layer = {
  key: string;
  label: string;
  thickness: number;
  width: number;
  fill: string;
  radius: string;
};

const MAX_PATTIES = 4;
const MAX_SAUCES = 3;
/** Rendered stack is scaled to fit this box rather than clipped. */
const STACK_BOX = 420;

export function BurgerBuilder() {
  const [bunId, setBunId] = useState("brioche");
  const [patties, setPatties] = useState(2);
  const [cheeseId, setCheeseId] = useState<string | null>("american");
  const [sauceIds, setSauceIds] = useState<string[]>(["handcraft-sauce"]);
  const [toppingIds, setToppingIds] = useState<string[]>(["romaine", "tomato"]);
  const [added, setAdded] = useState(false);
  const { add, openDrawer } = useCart();

  const bun = ING_BY_ID[bunId];

  const chosen = useMemo<Ingredient[]>(
    () =>
      [cheeseId, ...sauceIds, ...toppingIds]
        .filter((id): id is string => Boolean(id))
        .map((id) => ING_BY_ID[id])
        .filter(Boolean),
    [cheeseId, sauceIds, toppingIds],
  );

  const price = useMemo(
    () => bun.price + patties * PATTY.price + chosen.reduce((n, i) => n + i.price, 0),
    [bun, patties, chosen],
  );

  const heat = useMemo(
    () => chosen.reduce((n, i) => Math.max(n, i.heat), 0),
    [chosen],
  );

  const searSeconds = patties === 0 ? 0 : 58 + patties * 12 + (cheeseId ? 8 : 0);

  const name = useMemo(
    () => nameBuild({ patties, cheeseId, sauceIds, toppingIds, heat }),
    [patties, cheeseId, sauceIds, toppingIds, heat],
  );

  /** Bottom-up assembly, exactly the order it is built on the pass. */
  const layers = useMemo<Layer[]>(() => {
    const out: Layer[] = [];
    out.push({
      key: "heel",
      label: `${bun.name} heel`,
      thickness: Math.round(bun.thickness * 0.6),
      width: bun.width,
      fill: bun.fill,
      radius: "8px 8px 26px 26px",
    });

    for (const ing of chosen.filter((i) => i.order < 30).sort((a, b) => a.order - b.order)) {
      out.push({
        key: ing.id,
        label: ing.name,
        thickness: ing.thickness,
        width: ing.width,
        fill: ing.fill,
        radius: ing.radius ?? "999px",
      });
    }

    for (let i = 0; i < patties; i++) {
      out.push({
        key: `patty-${i}`,
        label: "Smashed 3oz patty",
        thickness: PATTY.thickness,
        width: PATTY.width,
        fill: PATTY.fill,
        radius: "999px",
      });
    }

    for (const ing of chosen.filter((i) => i.order >= 30).sort((a, b) => a.order - b.order)) {
      out.push({
        key: ing.id,
        label: ing.name,
        thickness: ing.thickness,
        width: ing.width,
        fill: ing.fill,
        radius: ing.radius ?? "999px",
      });
    }

    out.push({
      key: "crown",
      label: `${bun.name} crown`,
      thickness: bun.thickness,
      width: bun.width,
      fill: bun.fill,
      radius: "999px 999px 8px 8px",
    });
    return out;
  }, [bun, chosen, patties]);

  const stackHeight = layers.reduce((n, l) => n + l.thickness + 2, 0);
  const scale = Math.max(0.42, Math.min(1, STACK_BOX / stackHeight));

  const toggleIn = (list: string[], id: string, max: number) =>
    list.includes(id)
      ? list.filter((x) => x !== id)
      : list.length >= max
        ? [...list.slice(1), id]
        : [...list, id];

  const surprise = () => {
    const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
    setBunId(pick(BY_GROUP.bun).id);
    setPatties(1 + Math.floor(Math.random() * 3));
    setCheeseId(Math.random() > 0.15 ? pick(BY_GROUP.cheese).id : null);
    setSauceIds(
      BY_GROUP.sauce.filter(() => Math.random() > 0.62).slice(0, MAX_SAUCES).map((i) => i.id),
    );
    setToppingIds(BY_GROUP.topping.filter(() => Math.random() > 0.6).map((i) => i.id));
  };

  const onAdd = () => {
    if (patties === 0 && chosen.length === 0) return;
    add({
      key: `forge:${bunId}:${patties}:${cheeseId ?? "-"}:${[...sauceIds].sort().join(",")}:${[...toppingIds].sort().join(",")}`,
      name,
      price,
      note: `Your build · ${patties} patt${patties === 1 ? "y" : "ies"}`,
      build: layers.map((l) => l.label),
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
      {/* ================================================== the stack ==== */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="griddle-steel relative flex min-h-[320px] items-end justify-center overflow-hidden border border-bone/10 px-6 pt-10 pb-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ember/22 to-transparent"
          />

          <div
            className="relative flex flex-col-reverse items-center"
            style={{
              height: Math.min(STACK_BOX, stackHeight),
              justifyContent: "flex-start",
              transform: `scale(${scale})`,
              transformOrigin: "bottom center",
            }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {layers.map((l) => (
                <motion.div
                  key={l.key}
                  layout
                  initial={{ opacity: 0, y: -22, scaleX: 0.86 }}
                  animate={{ opacity: 1, y: 0, scaleX: 1 }}
                  exit={{ opacity: 0, y: -14, scaleX: 0.86 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  title={l.label}
                  className="mb-[2px] shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
                  style={{
                    height: l.thickness,
                    width: l.width,
                    background: l.fill,
                    borderRadius: l.radius,
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ------------------------------------------------- telemetry -- */}
        <div className="mt-6 grid grid-cols-2 gap-px bg-bone/10 sm:grid-cols-4">
          {[
            ["Layers", String(layers.length)],
            ["Beef", `${patties * 3} oz`],
            ["Sear", searSeconds ? `${searSeconds}s` : "—"],
            ["Stack", `${Math.round(stackHeight * 0.42)} mm`],
          ].map(([k, v]) => (
            <div key={k} className="bg-char px-4 py-4">
              <p className="label-tech text-bone/40">{k}</p>
              <p className="font-display mt-2 text-2xl text-bone">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================== controls ===== */}
      <div>
        <div className="border border-bone/12 bg-soot p-6 md:p-8">
          <p className="label-tech text-gold">Your build</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <motion.h2
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="font-display text-4xl text-bone md:text-5xl"
            >
              {name}
            </motion.h2>
            <span className="font-mono-tech text-3xl text-gold">{money(price)}</span>
          </div>
          <HeatMeter heat={heat} className="mt-5" />
        </div>

        <Section title="Bun" note="Everything starts here.">
          <div className="flex flex-wrap gap-2">
            {BY_GROUP.bun.map((i) => (
              <Chip key={i.id} on={bunId === i.id} onClick={() => setBunId(i.id)}>
                {i.name}
              </Chip>
            ))}
          </div>
        </Section>

        <Section title="Patties" note={`${money(PATTY.price)} each · 3 oz, smashed thin`}>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPatties((p) => Math.max(0, p - 1))}
              disabled={patties === 0}
              aria-label="One fewer patty"
              className="flex h-12 w-12 items-center justify-center border border-bone/20 text-2xl text-bone transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-bone/20 disabled:hover:text-bone"
            >
              −
            </button>
            <span className="font-display w-14 text-center text-5xl text-bone">{patties}</span>
            <button
              type="button"
              onClick={() => setPatties((p) => Math.min(MAX_PATTIES, p + 1))}
              disabled={patties === MAX_PATTIES}
              aria-label="One more patty"
              className="flex h-12 w-12 items-center justify-center border border-bone/20 text-2xl text-bone transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-bone/20 disabled:hover:text-bone"
            >
              +
            </button>
            {patties === MAX_PATTIES && (
              <span className="label-tech text-gold">That is the ceiling. We tried.</span>
            )}
          </div>
        </Section>

        <Section title="Cheese" note="Laid on at 60 seconds so it melts into the crust.">
          <div className="flex flex-wrap gap-2">
            <Chip on={cheeseId === null} onClick={() => setCheeseId(null)}>
              None
            </Chip>
            {BY_GROUP.cheese.map((i) => (
              <Chip key={i.id} on={cheeseId === i.id} onClick={() => setCheeseId(i.id)} price={i.price}>
                {i.name}
              </Chip>
            ))}
          </div>
        </Section>

        <Section title="Sauce" note={`Up to ${MAX_SAUCES}. We will not stop you.`}>
          <div className="flex flex-wrap gap-2">
            {BY_GROUP.sauce.map((i) => (
              <Chip
                key={i.id}
                on={sauceIds.includes(i.id)}
                heat={i.heat}
                price={i.price}
                onClick={() => setSauceIds((s) => toggleIn(s, i.id, MAX_SAUCES))}
              >
                {i.name}
              </Chip>
            ))}
          </div>
        </Section>

        <Section title="Toppings" note="Order on the stack is decided by the kitchen, not by you.">
          <div className="flex flex-wrap gap-2">
            {BY_GROUP.topping.map((i) => (
              <Chip
                key={i.id}
                on={toppingIds.includes(i.id)}
                heat={i.heat}
                price={i.price}
                onClick={() => setToppingIds((t) => toggleIn(t, i.id, 99))}
              >
                {i.name}
              </Chip>
            ))}
          </div>
        </Section>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onAdd}
            disabled={patties === 0 && chosen.length === 0}
            className={cn(
              "label-tech flex-1 px-6 py-5 transition-colors disabled:opacity-40",
              added ? "bg-bone text-char" : "bg-gold text-char hover:bg-bone",
            )}
          >
            {added ? "Added ✓" : `Add ${name} · ${money(price)}`}
          </button>
          <button
            type="button"
            onClick={surprise}
            className="label-tech border border-bone/20 px-6 py-5 text-bone/75 transition-colors hover:border-gold hover:text-gold"
          >
            Surprise me
          </button>
          <button
            type="button"
            onClick={openDrawer}
            className="label-tech border border-bone/20 px-6 py-5 text-bone/75 transition-colors hover:border-bone hover:text-bone"
          >
            View order
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-bone/10 pt-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-2xl text-bone">{title}</h3>
        <p className="label-tech text-bone/35">{note}</p>
      </div>
      {children}
    </section>
  );
}

function Chip({
  on,
  onClick,
  children,
  heat = 0,
  price = 0,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
  heat?: number;
  price?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={cn(
        "group flex items-center gap-2.5 border px-4 py-3 text-sm transition-colors",
        on
          ? "border-gold bg-gold/12 text-bone"
          : "border-bone/15 text-bone/60 hover:border-bone/40 hover:text-bone",
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rotate-45 transition-colors",
          on ? "bg-gold" : "bg-bone/25",
        )}
      />
      {children}
      {heat >= 3 && <span className="text-ember">🌶</span>}
      {price > 0 && <span className="font-mono-tech text-[11px] text-bone/35">+{money(price)}</span>}
    </button>
  );
}
