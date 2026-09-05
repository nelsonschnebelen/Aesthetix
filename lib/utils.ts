import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { REGULAR_HOURS } from "@/lib/site";

export const TZ = "America/New_York";

export type GriddleStatus = {
  open: boolean;
  /** Short state word for the ticker. */
  state: string;
  /** Human sentence under it. */
  detail: string;
  /** Local time at the shop, "6:42 PM". */
  localTime: string;
};

/** Formats an hour in 24h as "9PM" / "11AM", the way the shop writes it. */
export function hourLabel(h: number): string {
  const suffix = h >= 12 ? "PM" : "AM";
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve}${suffix}`;
}

/**
 * Open/closed against the shop's own clock in New York, and against the real
 * per-day hours — closing moves between 8, 9 and 10 depending on the day.
 * Client-only: a server-rendered answer would be stale by the time it is read.
 */
export function griddleStatus(now: Date = new Date()): GriddleStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 12) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);

  const localTime = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const today = REGULAR_HOURS.find((r) => r.dow.includes(dow)) ?? REGULAR_HOURS[0];
  const minutes = hour * 60 + minute;
  const openAt = today.open * 60;
  const closeAt = today.close * 60;
  const open = minutes >= openAt && minutes < closeAt;

  if (open) {
    const left = closeAt - minutes;
    return {
      open: true,
      state: left <= 60 ? "Last call" : "Open now",
      detail:
        left <= 60
          ? `Closes in ${left} min`
          : `Closes at ${hourLabel(today.close)}`,
      localTime,
    };
  }

  // Before opening today, or after closing — the next open is tomorrow's.
  let until: number;
  if (minutes < openAt) {
    until = openAt - minutes;
  } else {
    const tomorrow = REGULAR_HOURS.find((r) => r.dow.includes((dow + 1) % 7)) ?? today;
    until = 24 * 60 - minutes + tomorrow.open * 60;
  }
  const h = Math.floor(until / 60);
  const m = until % 60;
  return {
    open: false,
    state: "Closed",
    detail: `Opens in ${h ? `${h}h ` : ""}${m}m`,
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
