"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/build", label: "Build" },
  { href: "/story", label: "Story" },
  { href: "/visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { count, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-b border-bone/10 bg-char/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-10">
        <Link href="/" className="font-display text-xl tracking-wide text-bone md:text-2xl">
          Hand<span className="text-ember">craft</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "label-tech relative px-4 py-3 transition-colors",
                  active ? "text-ember" : "text-bone/65 hover:text-bone",
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 bottom-1.5 h-px bg-ember"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openDrawer}
            className="label-tech group relative flex items-center gap-2.5 bg-bone px-5 py-3 text-char transition-colors hover:bg-ember"
          >
            Order
            <span className="flex h-5 min-w-5 items-center justify-center bg-char px-1.5 font-mono-tech text-[11px] leading-none text-bone">
              {count}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-bone/20 md:hidden"
          >
            <span
              className={cn(
                "block h-px w-5 bg-bone transition-transform",
                mobileOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-bone transition-transform",
                mobileOpen && "-translate-y-[3px] -rotate-45",
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
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-6 pb-6">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display border-b border-bone/10 py-5 text-3xl text-bone"
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
