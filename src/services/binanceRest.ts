import { BinanceTickerResponse, Market } from "../types/market";

const BINANCE_API = "https://api.binance.com/api/v3/ticker/24hr";

export async function fetchMarkets(): Promise<Market[]> {
  const response = await fetch(BINANCE_API);

  if (!response.ok) {
    throw new Error("Failed to fetch market data");
  }

  const data: BinanceTickerResponse[] = await response.json();

  const selectedSymbols = [
    "BTCUSDT",
    "ETHUSDT",
    "BNBUSDT",
    "SOLUSDT",
    "XRPUSDT",
    "ADAUSDT",
    "DOGEUSDT",
    "AVAXUSDT",
    "MATICUSDT",
    "DOTUSDT",
  ];

  const markets: Market[] = data
    .filter((item) => selectedSymbols.includes(item.symbol))
    .map((item) => ({
      symbol: item.symbol,
      price: Number(item.lastPrice),
      change24h: Number(item.priceChangePercent),
      lastUpdate: item.closeTime,
      highPrice: Number(item.highPrice),
      lowPrice: Number(item.lowPrice),
      volume: Number(item.volume),
    }));

  return markets;
}
