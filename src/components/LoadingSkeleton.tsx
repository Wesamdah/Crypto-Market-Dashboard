export function LoadingSkeleton() {
  return (
    <div className="border rounded-xl p-6 animate-pulse space-y-4 border-gray-200 ">
      <div className="h-4 w-24 bg-gray-300 rounded"></div>

      <div className="h-8 w-40 bg-gray-300 rounded"></div>

      <div className="h-4 w-32 bg-gray-300 rounded"></div>

      <div className="h-10 w-full bg-gray-300 rounded"></div>
    </div>
  );
}
