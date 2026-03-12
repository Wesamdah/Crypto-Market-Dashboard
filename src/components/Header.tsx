import { TrendingUp } from "lucide-react";

import ThemeToggle from "./theme/theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center gap-3 mb-8 bg-white  px-4 h-25 md:px-18 border-b border-b-gray-200 w-full dark:bg-gray-800 dark:border-gray-700 ">
      <div className="bg-blue-500 text-white p-3 ">
        <TrendingUp size={22} />
      </div>

      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Crypto Market Dashboard
      </h1>
      <ThemeToggle />
    </header>
  );
}
