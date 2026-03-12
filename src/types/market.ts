export interface Market {
  symbol: string;
  price: number;
  change24h: number;
  lastUpdate: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
}

export interface BinanceTickerResponse {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
  closeTime: number;
  highPrice: string;
  lowPrice: string;
  volume: string;
}
