import React, { useEffect } from "react";
import { getFavouritePokemon } from "@/lib/pokemons";
export const useFavouritePokemon = () => {
  const [likedPokemons, setLikedPokemons] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);

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
