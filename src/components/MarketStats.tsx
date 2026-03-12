interface Props {
  high: number;
  low: number;
  volume: number;
}

export default function MarketStats({ high, low, volume }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div
        className="border border-gray-200 rounded-xl p-5 bg-white
      
       dark:bg-gray-900
 dark:border-gray-700
      "
      >
        <p className="text-sm text-gray-500 mb-1">24h High</p>
        <p className="text-xl font-semibold">${high.toLocaleString()}</p>
      </div>

      <div
        className="border border-gray-200 rounded-xl p-5 bg-white dark:bg-gray-900
 dark:border-gray-700"
      >
        <p className="text-sm text-gray-500 mb-1">24h Low</p>
        <p className="text-xl font-semibold">${low.toLocaleString()}</p>
      </div>

      <div
        className="border border-gray-200 rounded-xl p-5 bg-white dark:bg-gray-900
 dark:border-gray-700"
      >
        <p className="text-sm text-gray-500 mb-1">24h Volume</p>
        <p className="text-xl font-semibold">{volume}</p>
      </div>
    </div>
  );
}
