import React from "react";
import { getPokemonByName } from "@/lib/pokemons";
import { Pokemon } from "pokenode-ts";
export const useSearchByName = () => {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  const handleClear = () => {
    setPokemon(null);
  };

  const handleSearch = async (name: string) => {
    try {
      const pokemon = await getPokemonByName(name);
      setPokemon(pokemon);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return { pokemon, loading, error, handleSearch, handleClear, handleRefetch };
};
