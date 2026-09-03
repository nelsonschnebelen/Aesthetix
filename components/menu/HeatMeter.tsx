import { cn } from "@/lib/utils";
import { HEAT_WORDS } from "@/lib/utils";

/** Five bars, filled to the item's heat, plus the word we use at the counter. */
export function HeatMeter({
  heat,
  showWord = true,
  className,
}: {
  heat: number;
  showWord?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="flex gap-1" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={cn(
              "h-3 w-[3px] skew-x-[-14deg]",
              i < heat
                ? heat >= 4
                  ? "bg-ember"
                  : "bg-cheese"
                : "bg-bone/18",
            )}
          />
        ))}
      </span>
      {showWord && (
        <span
          className={cn(
            "label-tech",
            heat >= 4 ? "text-ember" : heat > 0 ? "text-cheese/80" : "text-bone/35",
          )}
        >
          {HEAT_WORDS[Math.min(heat, HEAT_WORDS.length - 1)]}
        </span>
      )}
      <span className="sr-only">Heat level {heat} of 5</span>
    </div>
  );
}
