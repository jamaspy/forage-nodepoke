import React, { useEffect, useState } from "react";
import { getFavouritePokemon } from "@/lib/pokemons";
export const useFavouritePokemon = () => {
  const [likedPokemons, setLikedPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  useEffect(() => {
    const fetchLikedPokemons = async () => {
      try {
        const likedPokemons = await getFavouritePokemon();
        setLikedPokemons(likedPokemons?.likedPokemons as any);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchLikedPokemons();
  }, [refetch]);

  return { likedPokemons, loading, error, handleRefetch };
};
