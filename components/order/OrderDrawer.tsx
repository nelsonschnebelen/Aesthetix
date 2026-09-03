"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GriddleStatus } from "@/components/GriddleStatus";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/utils";

const TAX_RATE = 0.08875; // NYC combined

export function OrderDrawer() {
  const { lines, subtotal, count, setQty, remove, clear, drawerOpen, closeDrawer } = useCart();
  const [sent, setSent] = useState(false);

  // The drawer owns the page lock: it is the only thing that covers it.
  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, closeDrawer]);

  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;

  const send = () => {
    setSent(true);
    window.setTimeout(() => {
      clear();
      setSent(false);
      closeDrawer();
    }, 2600);
  };

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[60] bg-char/70 backdrop-blur-sm"
          />

          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Your order"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
            className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-md flex-col border-l border-bone/12 bg-soot"
          >
            <header className="flex items-center justify-between border-b border-bone/10 px-6 py-5">
              <div>
                <h2 className="font-display text-2xl text-bone">On the pass</h2>
                <p className="label-tech mt-1.5 text-bone/40">
                  {count} {count === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close order"
                className="flex h-10 w-10 items-center justify-center border border-bone/20 text-bone/70 transition-colors hover:border-ember hover:text-ember"
              >
                ✕
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="ember-dot h-3 w-3 rounded-full bg-ember" />
                  <p className="font-display mt-6 text-3xl text-bone">Fired.</p>
                  <p className="mt-3 max-w-xs text-bone/55">
                    Your order is on the flat top. Four minutes, give or take a
                    queue. We will call the name at the counter.
                  </p>
                </div>
              ) : lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-display text-3xl text-bone">Nothing yet.</p>
                  <p className="mt-3 max-w-xs text-bone/50">
                    The griddle is not going to smash itself. Start with the
                    Handcraft Double — everyone else does.
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col divide-y divide-bone/10">
                  {lines.map((l) => (
                    <li key={l.key} className="flex gap-4 py-5">
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-xl text-bone">{l.name}</p>
                        {l.note && (
                          <p className="label-tech mt-1.5 text-bone/40">{l.note}</p>
                        )}
                        {l.build && (
                          <p className="mt-2 text-xs leading-relaxed text-bone/35">
                            {l.build.join(" · ")}
                          </p>
                        )}
                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setQty(l.key, l.qty - 1)}
                            aria-label={`One fewer ${l.name}`}
                            className="h-8 w-8 border border-bone/20 text-bone/70 transition-colors hover:border-ember hover:text-ember"
                          >
                            −
                          </button>
                          <span className="font-mono-tech w-6 text-center text-bone">
                            {l.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(l.key, l.qty + 1)}
                            aria-label={`One more ${l.name}`}
                            className="h-8 w-8 border border-bone/20 text-bone/70 transition-colors hover:border-ember hover:text-ember"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(l.key)}
                            className="label-tech ml-2 text-bone/35 transition-colors hover:text-ember"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <span className="font-mono-tech shrink-0 text-cheese">
                        {money(l.price * l.qty)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && !sent && (
              <footer className="border-t border-bone/10 px-6 py-5">
                <GriddleStatus className="mb-5" />
                <dl className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between text-bone/55">
                    <dt>Subtotal</dt>
                    <dd className="font-mono-tech">{money(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between text-bone/55">
                    <dt>Tax</dt>
                    <dd className="font-mono-tech">{money(tax)}</dd>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-bone/10 pt-3">
                    <dt className="font-display text-xl text-bone">Total</dt>
                    <dd className="font-mono-tech text-xl text-cheese">{money(total)}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={send}
                  className="label-tech mt-5 w-full bg-ember px-6 py-4 text-char transition-colors hover:bg-flame"
                >
                  Send it to the pass
                </button>
                <p className="mt-3 text-center text-xs text-bone/30">
                  Demo checkout — nothing is charged.
                </p>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
