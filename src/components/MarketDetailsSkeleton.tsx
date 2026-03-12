export default function MarketDetailsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Back Button */}
      <div className="h-10 w-40 bg-gray-200 rounded-lg" />

      {/* Hero Card */}
      <div className="border border-gray-200 rounded-xl p-8 bg-white flex justify-between">
        <div className="space-y-4">
          <div className="h-6 w-40 bg-gray-200 rounded" />

          <div className="h-4 w-24 bg-gray-200 rounded" />

          <div className="h-12 w-56 bg-gray-200 rounded" />

          <div className="h-8 w-32 bg-gray-200 rounded" />

          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>

        <div className="h-8 w-20 bg-gray-200 rounded-full" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <div className="h-4 w-20 bg-gray-200 rounded mb-3" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>

        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <div className="h-4 w-20 bg-gray-200 rounded mb-3" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>

        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <div className="h-4 w-20 bg-gray-200 rounded mb-3" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Realtime card */}
      <div className="border border-blue-200 rounded-xl p-6 bg-blue-50 space-y-4">
        <div className="h-5 w-52 bg-gray-200 rounded" />

        <div className="h-4 w-96 bg-gray-200 rounded" />

        <div className="flex gap-4">
          <div className="h-14 w-32 bg-gray-200 rounded-lg" />
          <div className="h-14 w-32 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
