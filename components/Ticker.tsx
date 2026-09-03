import { cn } from "@/lib/utils";

/**
 * Infinite marquee. The children are rendered twice and the track slides
 * exactly -50%, so the seam is invisible at any width. Pauses on hover.
 */
export function Ticker({
  items,
  duration = 34,
  reverse = false,
  className,
  separator = "◆",
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  separator?: string;
}) {
  const run = (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="flex items-center">
          <span className="px-6 whitespace-nowrap">{t}</span>
          <span aria-hidden className="text-ember/70">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn("ticker-host overflow-hidden", reverse && "ticker-reverse", className)}
      style={{ ["--ticker-duration" as string]: `${duration}s` }}
    >
      <div className="ticker-track" aria-hidden>
        {run}
        {run}
      </div>
      {/* Screen readers get the list once, not twice. */}
      <span className="sr-only">{items.join(". ")}</span>
    </div>
  );
}
