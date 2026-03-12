"use client";

import { useRecentMarkets } from "../hooks/useRecentMarkets";
import Link from "next/link";

export default function RecentlyViewed() {
  const { recent } = useRecentMarkets();

  if (recent.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Recently Viewed</h2>

      <div className="flex gap-3 flex-wrap ">
        {recent.map((symbol) => (
          <Link
            key={symbol}
            href={`/market/${symbol}`}
            className="px-3 py-1 bg-gray-200 rounded-md text-sm dark:bg-gray-800 dark:text-gray-300"
          >
            {symbol}
          </Link>
        ))}
      </div>
    </div>
  );
}
