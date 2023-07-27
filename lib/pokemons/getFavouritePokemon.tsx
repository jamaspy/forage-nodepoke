// loop through liked pokemon in localstorage and fetch pokemon by id
import { client } from "./client";
export const getFavouritePokemon = async () => {
  if (typeof window === "undefined") {
    return;
  }
  const likedPokemons = JSON.parse(localStorage.getItem("liked") || "[]");

  // if no liked pokemons, return empty array
  if (likedPokemons.length === 0) return { status: "OK", likedPokemons: [] };

  const pokemonsWithImages = await Promise.all(
    likedPokemons.map(async (pokemonId: any) => {
      const pokemonWithImage = await client.getPokemonById(+pokemonId);
      return pokemonWithImage;
    })
  );

  return { status: "OK", likedPokemons: pokemonsWithImages };
};
