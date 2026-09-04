"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/faq";
import { cn } from "@/lib/utils";

/** Plain disclosure list. One open at a time, keyboard and screen-reader safe. */
export function FaqList({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [open, setOpen] = useState<number | null>(0);
  const light = tone === "light";

  return (
    <ul className={cn("divide-y", light ? "divide-char/15" : "divide-bone/12")}>
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className={cn(
                  "flex w-full items-start justify-between gap-6 py-6 text-left transition-colors",
                  light
                    ? "text-char hover:text-oxblood"
                    : "text-bone hover:text-gold",
                )}
              >
                <span className="font-display text-xl uppercase md:text-2xl">{faq.q}</span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 shrink-0 text-2xl leading-none transition-transform duration-300",
                    isOpen && "rotate-45",
                    light ? "text-oxblood" : "text-gold",
                  )}
                >
                  +
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-7">
                    {faq.a.map((para) => (
                      <p
                        key={para}
                        className={cn(
                          "mb-3 max-w-2xl leading-relaxed last:mb-0",
                          light ? "text-char/70" : "text-bone/65",
                        )}
                      >
                        {para}
                      </p>
                    ))}

                    {faq.links?.length ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {faq.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={cn(
                              "btn",
                              light
                                ? "border-2 border-char text-char hover:bg-char hover:text-bone"
                                : "border border-bone/30 text-bone hover:bg-gold hover:text-char",
                            )}
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
