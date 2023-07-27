import { client } from "./client";

export const getAllPokemons = async () => {
  const pokemons = await client.listPokemons();
  const pokemonsWithImages = await Promise.all(
    pokemons.results.map(async (pokemon) => {
      const pokemonWithImage = await client.getPokemonByName(pokemon.name);
      return pokemonWithImage;
    })
  );

  return { pokemons, pokemonsWithImages };
};
