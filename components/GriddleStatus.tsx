"use client";

import { useEffect, useState } from "react";
import { griddleStatus, type GriddleStatus as Status } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Open/closed against the shop's clock in New York, not the visitor's.
 * Deliberately renders nothing until mounted — a server-rendered answer
 * would be stale by the time anyone read it.
 */
export function GriddleStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(griddleStatus());
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("flex items-center gap-3", className)} aria-live="polite">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span
          className={cn(
            "ember-dot absolute inline-flex h-full w-full rounded-full",
            status?.open ? "bg-gold" : "bg-smoke",
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2.5 w-2.5 rounded-full",
            status?.open ? "bg-gold" : "bg-smoke",
          )}
        />
      </span>
      <span className="label-tech text-bone/70">
        {status ? (
          <>
            <span className={status.open ? "text-gold" : "text-bone/60"}>{status.state}</span>
            <span className="mx-2 text-bone/25">/</span>
            {status.detail}
            <span className="mx-2 text-bone/25">/</span>
            {status.localTime} NYC
          </>
        ) : (
          <span className="text-bone/40">Checking the griddle…</span>
        )}
      </span>
    </div>
  );
}
