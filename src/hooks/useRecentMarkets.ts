"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "recent-markets";

export function useRecentMarkets(symbol?: string) {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setRecent(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (!symbol) return;

    const stored = localStorage.getItem(STORAGE_KEY);
    let items: string[] = stored ? JSON.parse(stored) : [];

    items = [symbol, ...items.filter((s) => s !== symbol)];
    items = items.slice(0, 5);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setRecent(items);
  }, [symbol]);

  return { recent };
}
