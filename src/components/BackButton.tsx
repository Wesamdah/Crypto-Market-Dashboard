"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="
      flex items-center gap-2
      border border-gray-200
      px-4 py-2
      rounded-lg
      text-sm
      hover:bg-gray-50
      hover:opacity-80
      transition
      cursor-pointer

      dark:border-gray-700
 dark:hover:bg-gray-800
      "
    >
      <ArrowLeft size={16} />
      Back to Markets
    </button>
  );
}
