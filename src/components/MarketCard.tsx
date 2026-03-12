"use client";

import Link from "next/link";

import { Market } from "../types/market";

import FavoritesButton from "./FavoritesButton";

interface Props {
  market: Market;
}

export default function MarketCard({ market }: Props) {
  const isPositive = market.change24h >= 0;

  return (
    <div
      className="
      bg-white dark:bg-gray-900
      border
    border-gray-200 dark:border-gray-700
      rounded-xl
      p-5
      shadow-sm
      cursor-pointer
      transition
      hover:shadow-lg hover:scale-[1.02]
      "
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="font-semibold text-lg">{market.symbol}</h2>

          <p className="text-sm text-gray-500">
            {market.symbol.replace("USDT", "/USDT")}
          </p>
        </div>

        <FavoritesButton symbol={market.symbol} />
      </div>

      <div
        className={`
        inline-block
        text-xs
        font-medium
        px-2
        py-1
        rounded-md
        mb-3
        ${isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}
        `}
      >
        {isPositive ? "↗" : "↘"} {market.change24h.toFixed(2)}%
      </div>

      <div className="text-3xl font-semibold mb-1">
        ${market.price.toLocaleString()}
      </div>

      <div className="border-t border-gray-100 my-4" />

      <div className="flex justify-between text-sm mb-5">
        <div>
          <p className="text-gray-500">24h High</p>
          <p className="font-medium">${market.highPrice.toLocaleString()}</p>
        </div>

        <div>
          <p className="text-gray-500">24h Low</p>
          <p className="font-medium">${market.lowPrice.toLocaleString()}</p>
        </div>
      </div>

      <Link
        href={`/market/${market.symbol}`}
        className="
        block
        text-center
        bg-black
       
        py-2.5
        rounded-lg
        font-medium
        hover:bg-[#486bf7]
        transition
   
        "
      >
        <p className="text-white  ">
          {" "}
          View Details <span className="text-2xl">→</span>
        </p>
      </Link>
    </div>
  );
}
