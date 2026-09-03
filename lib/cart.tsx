"use client";

import { useMemo, useSyncExternalStore } from "react";

export type CartLine = {
  /** Stable per-line key: menu id, or a fingerprint of a custom build. */
  key: string;
  name: string;
  /** Cents, per unit. */
  price: number;
  qty: number;
  /** Sub-line shown under the name — "Custom build", heat level, etc. */
  note?: string;
  build?: string[];
};

/* ------------------------------------------------------------------------
   The basket lives outside React in a tiny external store. That keeps the
   server snapshot (always empty) and the client snapshot (whatever is in
   localStorage) honest, instead of hydrating state inside an effect.
   ------------------------------------------------------------------------ */

const STORAGE_KEY = "handcraft.order.v1";
const EMPTY: CartLine[] = [];

let lines: CartLine[] = EMPTY;
let drawerOpen = false;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* private mode or full storage — the basket still works for this session */
  }
}

function hydrate() {
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) lines = parsed as CartLine[];
  } catch {
    /* corrupt JSON — an empty basket is a fine answer */
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  // The first subscriber pulls the saved basket in; React re-reads the
  // snapshot right after subscribing and renders it.
  if (!hydrated) {
    hydrate();
    emit();
  }
  return () => {
    listeners.delete(cb);
  };
}

const getLines = () => lines;
const getServerLines = () => EMPTY;
const getDrawer = () => drawerOpen;
const getServerDrawer = () => false;

function commit(next: CartLine[]) {
  lines = next;
  persist();
  emit();
}

export function addLine(line: Omit<CartLine, "qty">, qty = 1) {
  const at = lines.findIndex((l) => l.key === line.key);
  if (at === -1) {
    commit([...lines, { ...line, qty }]);
    return;
  }
  const next = [...lines];
  next[at] = { ...next[at], qty: next[at].qty + qty };
  commit(next);
}

export function setLineQty(key: string, qty: number) {
  commit(
    qty <= 0
      ? lines.filter((l) => l.key !== key)
      : lines.map((l) => (l.key === key ? { ...l, qty } : l)),
  );
}

export function removeLine(key: string) {
  commit(lines.filter((l) => l.key !== key));
}

export function clearLines() {
  commit([]);
}

export function setDrawer(open: boolean) {
  drawerOpen = open;
  emit();
}

const openDrawer = () => setDrawer(true);
const closeDrawer = () => setDrawer(false);

export function useCart() {
  const currentLines = useSyncExternalStore(subscribe, getLines, getServerLines);
  const open = useSyncExternalStore(subscribe, getDrawer, getServerDrawer);

  const { count, subtotal } = useMemo(
    () => ({
      count: currentLines.reduce((n, l) => n + l.qty, 0),
      subtotal: currentLines.reduce((n, l) => n + l.qty * l.price, 0),
    }),
    [currentLines],
  );

  return {
    lines: currentLines,
    count,
    subtotal,
    add: addLine,
    setQty: setLineQty,
    remove: removeLine,
    clear: clearLines,
    drawerOpen: open,
    openDrawer,
    closeDrawer,
  };
}
