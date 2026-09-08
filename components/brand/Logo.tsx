import { cn } from "@/lib/utils";
import { img } from "@/lib/images";

/**
 * The real badge — Handcraft's own hexagon lockup, from their brand folder.
 * Two files: the original charcoal ink for light surfaces, and the same
 * artwork in bone for dark ones.
 */
export function Logo({
  className,
  tone = "bone",
}: {
  className?: string;
  /** Which surface it is sitting on: bone ink on dark, ink on light. */
  tone?: "bone" | "ink";
}) {
  const src = tone === "bone" ? "/img/brand/logo-light.png" : "/img/brand/logo-dark.png";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static brand asset, sized by height
    <img
      src={img(src)}
      alt="Handcraft Burgers and Brew, Bryant Park"
      className={cn("h-full w-auto select-none", className)}
      draggable={false}
    />
  );
}

/** Compact one-line wordmark for tight spots. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-2xl tracking-wide", className)}>
      Handcraft<span className="text-ember">.</span>
    </span>
  );
}
