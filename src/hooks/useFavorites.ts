"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const STORAGE_KEY = "favorite-markets";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  function toggleFavorite(symbol: string) {
    let updated: string[];

    if (favorites.includes(symbol)) {
      updated = favorites.filter((s) => s !== symbol);
      toast.info("Removed from favorites");
    } else {
      updated = [...favorites, symbol];
      toast.success("Added to favorites");
    }

    setFavorites(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function isFavorite(symbol: string) {
    return favorites.includes(symbol);
  }

  return { favorites, toggleFavorite, isFavorite };
}
