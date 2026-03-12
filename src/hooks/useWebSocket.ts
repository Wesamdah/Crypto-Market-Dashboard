"use client";

import { useEffect, useRef, useState } from "react";

type connectionStatus =
  | "connected"
  | "disconnected"
  | "connecting"
  | "reconnecting";

interface tickerData {
  price: number;
  change: number;
  time: number;
  high: number;
  low: number;
  volume: number;
}

export function useWebSocket(symbol: string) {
  const [data, setData] = useState<tickerData | null>(null);
  const [status, setStatus] = useState<connectionStatus>("connecting");

  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const url = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`;

    function connect() {
      setStatus("connecting");

      const ws = new WebSocket(url);
      socketRef.current = ws;

      ws.onopen = () => {
        setStatus("connected");
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setData({
          price: Number(message.c),
          change: Number(message.P),
          time: message.E,
          high: Number(message.h),
          low: Number(message.l),
          volume: Number(message.v),
        });
      };

      ws.onclose = () => {
        setStatus("disconnected");

        reconnectTimeout.current = setTimeout(() => {
          setStatus("reconnecting");
          connect();
        }, 3000);
      };

      ws.onerror = () => {
        ws.close();
      };
    }

    connect();

    return () => {
      socketRef.current?.close();
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
      }
    };
  }, [symbol]);

  return { data, status };
}
