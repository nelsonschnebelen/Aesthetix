"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { useCart } from "@/lib/cart";
import { griddleStatus } from "@/lib/utils";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/build", label: "Build" },
  { href: "/#month", label: "This Month" },
  { href: "/story", label: "Our Story" },
  { href: "/club", label: "Club" },
  { href: "/visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const pathname = usePathname();
  const { count, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const s = griddleStatus();
      setStatus(s.open ? "Open until 9" : "Closed");
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-b border-bone/12 bg-char/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-5 md:h-24 md:px-8">
        <Link href="/" aria-label="Handcraft, home" className="shrink-0">
          <Logo className="h-14 md:h-16" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "label-tech relative px-2.5 py-3 transition-colors",
                  active ? "text-gold" : "text-bone/75 hover:text-bone",
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 bottom-1.5 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <p className="label-tech hidden text-bone/55 lg:block">
            Bryant Park
            {status && (
              <>
                <span className="mx-2 text-bone/25">·</span>
                <span className="text-gold">{status}</span>
              </>
            )}
          </p>

          <button
            type="button"
            onClick={openDrawer}
            className="label-tech flex items-center gap-2.5 bg-gold px-5 py-3.5 text-char transition-colors hover:bg-bone md:px-7"
          >
            Order Online
            {count > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center bg-char px-1.5 text-[11px] leading-none text-bone">
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-bone/25 xl:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-5 bg-bone transition-transform",
                mobileOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 bg-bone transition-transform",
                mobileOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden xl:hidden"
          >
            <div className="flex flex-col px-5 pb-6">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display border-b border-bone/12 py-5 text-3xl text-bone"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
