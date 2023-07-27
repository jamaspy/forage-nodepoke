"use client";

import React, { useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LikePokemon } from "@/lib/pokemons/likePokemon";
import { UnlikePokemon } from "@/lib/pokemons/unlikePokemon";
export const LikeButton = ({ id }: { id: number }) => {
  const [liked, setLiked] = React.useState(false);

  const handleLiked = () => {
    if (liked) {
      UnlikePokemon(id);
      setLiked(false);
    }
    if (!liked) {
      LikePokemon(id);
      setLiked(true);
    }
  };

  useEffect(() => {
    const checkLiked = () => {
      const likedPokemons = JSON.parse(localStorage.getItem("liked") || "[]");
      if (likedPokemons.includes(id)) {
        setLiked(true);
      }
    };
    checkLiked();
  }, [id]);

  return (
    <button
      onClick={handleLiked}
      className="bg-white  flex flex-row- items-center justify-center rounded-full w-12 h-12 text-xl"
    >
      {!liked ? (
        <FaRegHeart className="text-pink-500 text-2xl" />
      ) : (
        <FaHeart className="text-pink-600 text-2xl" />
      )}
    </button>
  );
};
