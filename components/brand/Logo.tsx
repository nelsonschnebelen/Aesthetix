import { cn } from "@/lib/utils";

/**
 * The badge: a horizontal hexagon locking up the neighbourhood, the wordmark
 * and the category. Drawn as SVG so it stays sharp at any size and costs
 * nothing to load.
 */
export function Logo({
  className,
  tone = "bone",
}: {
  className?: string;
  /** Which surface it is sitting on. */
  tone?: "bone" | "ink";
}) {
  const stroke = tone === "bone" ? "#f4ede0" : "#131110";
  const fill = tone === "bone" ? "#f4ede0" : "#131110";

  return (
    <svg
      viewBox="0 0 220 128"
      role="img"
      aria-label="Handcraft Burgers and Brew, Bryant Park"
      className={cn("h-full w-auto", className)}
    >
      <polygon
        points="30,3 190,3 217,64 190,125 30,125 3,64"
        fill="none"
        stroke={stroke}
        strokeWidth="3"
      />
      <polygon
        points="36,11 184,11 209,64 184,117 36,117 11,64"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.5"
      />

      <text
        x="110"
        y="34"
        textAnchor="middle"
        fill={fill}
        className="font-sans"
        fontSize="12"
        fontWeight="600"
        letterSpacing="3.4"
      >
        BRYANT PARK
      </text>

      <text
        x="110"
        y="72"
        textAnchor="middle"
        fill={fill}
        className="font-display"
        fontSize="34"
        letterSpacing="0.4"
      >
        HANDCRAFT
      </text>

      <line x1="34" y1="88" x2="94" y2="88" stroke={stroke} strokeWidth="1.4" />
      <text
        x="110"
        y="94"
        textAnchor="middle"
        fill={fill}
        className="font-display"
        fontSize="20"
      >
        &amp;
      </text>
      <line x1="126" y1="88" x2="186" y2="88" stroke={stroke} strokeWidth="1.4" />

      <text
        x="110"
        y="112"
        textAnchor="middle"
        fill={fill}
        className="font-sans"
        fontSize="11"
        fontWeight="600"
        letterSpacing="2.6"
      >
        BURGERS &amp; BREW
      </text>
    </svg>
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
