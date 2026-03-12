"use client";

import FavoritesButton from "./FavoritesButton";
import { Wifi } from "lucide-react";

type ConnectionStatus =
  | "connected"
  | "connecting"
  | "reconnecting"
  | "disconnected";

interface Props {
  symbol: string;
  price: number;
  change: number;
  time: number;
  status: ConnectionStatus;
}

export default function MarketHero({
  symbol,
  price,
  change,
  time,
  status,
}: Props) {
  const isPositive = change >= 0;

  const statusStyles = {
    connected: "bg-green-100 text-green-700",
    connecting: "bg-yellow-100 text-yellow-700",
    reconnecting: "bg-orange-100 text-orange-700",
    disconnected: "bg-red-100 text-red-700",
  };

  const statusLabel = {
    connected: "Live",
    connecting: "Connecting",
    reconnecting: "Reconnecting",
    disconnected: "Disconnected",
  };

  return (
    <div
      className="border border-gray-200 rounded-xl p-8 bg-white flex justify-between items-start
    
     dark:bg-gray-900
 dark:border-gray-700
    
    "
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">{symbol}</h1>
          <FavoritesButton symbol={symbol} />
        </div>

        <p className="text-gray-500 mb-6">
          {symbol.replace("USDT", " / USDT")}
        </p>

        <div className="text-5xl font-bold mb-4">${price.toLocaleString()}</div>

        <div className="flex items-center gap-3 mb-6">
          <div
            className={`
            flex items-center gap-2
            px-3 py-2
            rounded-lg
            text-sm font-medium
            ${
              isPositive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }
            `}
          >
            ↗ {change.toFixed(2)}%
          </div>

          <span className="text-gray-500 text-sm">24h Change</span>
        </div>

        <p className="text-sm text-gray-500">
          Last updated: {new Date(time).toLocaleTimeString()}
        </p>
      </div>

      <div
        className={`
  flex items-center gap-2
  px-3 py-1.5
  rounded-full
  text-sm
  font-medium
  ${statusStyles[status]}
    ${status === "connected" ? "animate-pulse" : ""}
  `}
      >
        <Wifi size={16} />

        {statusLabel[status]}
      </div>
    </div>
  );
}
