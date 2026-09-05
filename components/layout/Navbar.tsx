"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { SITE } from "@/lib/site";
import { cn, griddleStatus } from "@/lib/utils";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/build", label: "Build" },
  { href: "/#month", label: "This Month" },
  { href: "/story", label: "Story" },
  { href: "/club", label: "Club" },
  { href: "/visit", label: "Visit" },
  { href: "/faq", label: "FAQ" },
];

/** Staggered entrance — the bar assembles itself once, on first paint. */
const bar = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
};
const piece = {
  hidden: { opacity: 0, y: -14 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 30 },
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);
  const pathname = usePathname();

  // Gold hairline across the foot of the bar, tracking read progress.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const s = griddleStatus();
      setStatus({ open: s.open, label: s.open ? s.detail.replace("Closes at", "Open until").replace("Closes in", "Closing in") : "Closed" });
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled || mobileOpen ? "rgba(19,17,16,0.93)" : "rgba(19,17,16,0)",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        variants={bar}
        initial="hidden"
        animate="shown"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10"
        style={{ height: undefined }}
      >
        <motion.div
          animate={{ paddingTop: scrolled ? 10 : 20, paddingBottom: scrolled ? 10 : 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
          className="flex w-full items-center justify-between gap-6"
        >
          <motion.div variants={piece} className="shrink-0">
            <Link href="/" aria-label="Handcraft, home">
              <motion.div
                animate={{ scale: scrolled ? 0.82 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
                style={{ transformOrigin: "left center" }}
              >
                <Logo className="h-14 md:h-16" />
              </motion.div>
            </Link>
          </motion.div>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <motion.div key={l.href} variants={piece}>
                  <Link
                    href={l.href}
                    className={cn(
                      "label-tech group relative block px-3 py-3 transition-colors",
                      active ? "text-gold" : "text-bone/75 hover:text-bone",
                    )}
                  >
                    {l.label}
                    {/* Hover: a gold rule wipes in from the left */}
                    <span className="absolute inset-x-3 bottom-1.5 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 bottom-1.5 h-[2px] bg-gold"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <motion.p variants={piece} className="label-tech hidden text-bone/55 lg:block">
              Bryant Park
              {status && (
                <>
                  <span className="mx-2 text-bone/25">·</span>
                  <span className={status.open ? "text-gold" : "text-bone/45"}>
                    {status.open && (
                      <span className="ember-dot mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                    )}
                    {status.label}
                  </span>
                </>
              )}
            </motion.p>

            <motion.div variants={piece}>
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="label-tech group relative flex items-center gap-2.5 overflow-hidden bg-gold px-6 py-3.5 text-char md:px-8"
              >
                {/* Sheen sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative">Order Online</span>
              </a>
            </motion.div>

            <motion.button
              variants={piece}
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-bone/25 xl:hidden"
            >
              <span
                className={cn(
                  "block h-[2px] w-5 bg-bone transition-transform duration-300",
                  mobileOpen && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-5 bg-bone transition-transform duration-300",
                  mobileOpen && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Read-progress hairline */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-[2px] origin-left bg-gold/85"
        aria-hidden
      />

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="overflow-hidden bg-char/95 xl:hidden"
          >
            <div className="flex flex-col px-5 pb-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display block border-b border-bone/12 py-5 text-3xl text-bone"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
