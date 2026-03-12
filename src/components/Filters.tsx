"use client";

import { ArrowUpDown } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Filters({ value, onChange }: Props) {
  return (
    <div className="relative">
      <ArrowUpDown size={16} className="absolute left-3 top-3 text-gray-400" />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
        border
        border-gray-200
        rounded-lg
        pl-9
        pr-6
        py-2.5
        bg-white
        text-sm
        focus:ring-2
        focus:ring-blue-500
        dark:bg-gray-800
        dark:border-gray-700
        dark:focus:ring-blue-400
        "
      >
        <option value="favorites">Favorites First</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="highestPrice">Highest Price</option>
        <option value="highestChange">Highest Change</option>
      </select>
    </div>
  );
}
