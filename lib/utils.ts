import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Cents -> "$13.95". Money never lives in floats. */
export function money(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export const HOURS = { open: 11, close: 21, tz: "America/New_York" } as const;

export type GriddleStatus = {
  open: boolean;
  /** Short state word for the ticker. */
  state: string;
  /** Human sentence under it. */
  detail: string;
  /** Local time at the shop, "6:42 PM". */
  localTime: string;
};

/**
 * Open/closed against the shop's own clock, not the visitor's.
 * Client-only: rendering this on the server would hydrate a stale answer.
 */
export function griddleStatus(now: Date = new Date()): GriddleStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: HOURS.tz,
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 12) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  const localTime = new Intl.DateTimeFormat("en-US", {
    timeZone: HOURS.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const minutes = hour * 60 + minute;
  const openAt = HOURS.open * 60;
  const closeAt = HOURS.close * 60;
  const open = minutes >= openAt && minutes < closeAt;

  if (open) {
    const left = closeAt - minutes;
    return {
      open: true,
      state: left <= 60 ? "Last call" : "Griddle hot",
      detail:
        left <= 60
          ? `Kitchen closes in ${left} min`
          : `Smashing until ${HOURS.close - 12}:00 PM`,
      localTime,
    };
  }

  const until = minutes < openAt ? openAt - minutes : 24 * 60 - minutes + openAt;
  const h = Math.floor(until / 60);
  const m = until % 60;
  return {
    open: false,
    state: "Steel cooling",
    detail: `Back on in ${h ? `${h}h ` : ""}${m}m`,
    localTime,
  };
}

/** Heat rating -> the words we actually use in the shop. */
export const HEAT_WORDS = [
  "No heat",
  "A whisper",
  "Warm",
  "Loud",
  "Serious",
  "Five alarm",
] as const;
