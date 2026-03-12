"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-full md:w-105 grow">
      <Search size={18} className="absolute left-3 top-3 text-gray-400" />

      <input
        type="text"
        placeholder="Search markets (e.g., BTCUSDT)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
        w-full
        border
        border-gray-200
        rounded-lg
        pl-10
        pr-4
        py-2.5
        bg-white
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        dark:bg-gray-800
        dark:border-gray-700
        dark:focus:ring-blue-400
        "
      />
    </div>
  );
}
