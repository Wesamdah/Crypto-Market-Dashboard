"use client";

import { useFavorites } from "../hooks/useFavorites";

import { Star } from "lucide-react";

interface Props {
  symbol: string;
}

export default function FavoritesButton({ symbol }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(symbol);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(symbol);
      }}
      className="text-xl"
    >
      {" "}
      {favorite ? (
        <Star size={20} className=" text-yellow-500" />
      ) : (
        <Star size={20} className=" text-gray-500" />
      )}
    </button>
  );
}
