"use client";

import { useMemo, useState, useEffect } from "react";

import { fetchMarkets } from "../services/binanceRest";

import { Market } from "../types/market";
import MarketList from "../components/MarketList";
import RecentlyViewed from "../components/RecentlyViewed";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

import { useFavorites } from "../hooks/useFavorites";

import { toast } from "react-toastify";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import Header from "../components/Header";

export default function HomePage() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("alphabetical");

  const { favorites } = useFavorites();

  useEffect(() => {
    async function loadMarkets() {
      try {
        setLoading(true);
        const data = await fetchMarkets();
        setMarkets(data);

        toast.success("Markets loaded successfully");
      } catch (err) {
        setError(true);

        toast.error("Failed to load markets");
      } finally {
        setLoading(false);
      }
    }
    loadMarkets();
  }, []);

  const filteredMarkets = useMemo(() => {
    let result = [...markets];

    if (search) {
      result = result.filter((m) =>
        m.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    if (sort === "alphabetical") {
      result.sort((a, b) => a.symbol.localeCompare(b.symbol));
    }

    if (sort === "highestPrice") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "highestChange") {
      result.sort((a, b) => b.change24h - a.change24h);
    }

    if (sort === "favorites") {
      result.sort((a, b) => {
        const aFav = favorites.includes(a.symbol) ? 1 : 0;
        const bFav = favorites.includes(b.symbol) ? 1 : 0;

        return bFav - aFav;
      });
    }

    return result;
  }, [markets, search, sort, favorites]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="p-8 max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return <div className="p-8 text-red-500">Failed to load markets.</div>;
  }

  return (
    <>
      <Header />
      <main className="p-8 max-w-7xl mx-auto">
        <RecentlyViewed />

        <div className="flex gap-4 mb-6 flex-wrap w-full">
          <SearchBar value={search} onChange={setSearch} />
          <Filters value={sort} onChange={setSort} />
        </div>

        <MarketList markets={filteredMarkets} />
      </main>
    </>
  );
}
