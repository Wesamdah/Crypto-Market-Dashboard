"use client";

import { useParams } from "next/navigation";
import { useWebSocket } from "../../../hooks/useWebSocket";

import { useRecentMarkets } from "@/src/hooks/useRecentMarkets";

import BackButton from "@/src/components/BackButton";
import MarketHero from "@/src/components/MarketHero";
import MarketStats from "@/src/components/MarketStats";
import RealtimeInfo from "@/src/components/RealtimeInfo";
import Header from "@/src/components/Header";

import MarketDetailsSkeleton from "@/src/components/MarketDetailsSkeleton";

export default function MarketDetailsPage() {
  const params = useParams();
  const symbol = params.symbol as string;

  const { data, status } = useWebSocket(symbol);

  useRecentMarkets(symbol);

  return (
    <>
      <Header />
      <main className=" max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold mb-6 p-4 lg:p-0 ">{symbol}</h1>

        {!data && <MarketDetailsSkeleton />}

        {data && (
          <div className="space-y-6 p-4 md:space-y-4 md:p-0">
            <BackButton />
            <MarketHero
              symbol={symbol}
              price={data.price}
              change={data.change}
              time={data.time}
              status={status}
            />

            <MarketStats
              high={data?.high ?? 0}
              low={data?.low ?? 0}
              volume={data?.volume ?? 0}
            />
            <RealtimeInfo price={data.price} />
          </div>
        )}
      </main>
    </>
  );
}
