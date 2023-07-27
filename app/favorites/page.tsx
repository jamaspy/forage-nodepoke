"use client";
import React from "react";
import { useFavouritePokemon } from "@/hooks/useFavouritePokemon";
import { Pokemon } from "pokenode-ts";
import { PokemonCard } from "@/components/PokemonCard";
import { Grid } from "@/components/Grid";
import { LoadingScreen, Nav } from "@/components/Layout";
import { PrimaryButton } from "@/components/Buttons";
import { UnlikePokemon } from "@/lib/pokemons";

const FavoritesPage = () => {
  const { likedPokemons, loading, handleRefetch } = useFavouritePokemon();
  if (loading) return <LoadingScreen />;

  if (likedPokemons.length === 0)
    return (
      <div className="bg-profile bg-cover md:bg-right bg-center min-h-screen flex flex-col items-center justify-center">
        <p className="text-white font-semibold">No liked pokemons</p>
      </div>
    );

  const handleUnlike = async (id: number) => {
    await UnlikePokemon(id);
    handleRefetch();
  };

  return (
    <div className="bg-profile bg-cover md:bg-right bg-center min-h-screen">
      <Nav />
      <p className="text-6xl text-white font-bold pl-4 mt-12">Favourites</p>
      <Grid>
        {likedPokemons.map((pokemon: Pokemon) => {
          return (
            <div key={pokemon.id} className="flex flex-col gap-4">
              <PokemonCard pokemon={pokemon} />
              <PrimaryButton
                label="Remove"
                onClick={() => handleUnlike(pokemon.id)}
              />
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default FavoritesPage;
