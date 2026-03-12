"use client";

import { Market } from "../types/market";
import MarketCard from "./MarketCard";

interface Props {
  markets: Market[];
}

export default function MarketList({ markets }: Props) {
  return (
    <div
      className="
grid gap-6
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
"
    >
      {markets.map((market) => (
        <MarketCard key={market.symbol} market={market} />
      ))}
    </div>
  );
}
