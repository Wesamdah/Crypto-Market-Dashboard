import { Activity } from "lucide-react";

interface Props {
  price: number;
}

export default function RealtimeInfo({ price }: Props) {
  return (
    <div
      className="
    border
    border-blue-200
    rounded-xl
    p-6
    mt-6
    bg-blue-50
  dark:bg-blue-950
  dark:border-blue-800

    "
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Activity size={20} />
        </div>

        <h3 className="font-semibold text-lg">Real-Time Price Updates</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4 dark:text-white">
        This market is connected via WebSocket and receives live price updates
        every few seconds.
      </p>

      <div className="flex gap-2 ">
        <div className="border rounded-lg px-4 py-2 bg-white grow text-center dark:text-gray-900">
          <p className="text-lg text-gray-400">Current Price</p>
          <p className="font-semibold">${price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
