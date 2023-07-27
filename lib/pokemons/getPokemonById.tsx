import { client } from "./client";

export const getPokemonById = async (id: number) => {
  const pokemon = await client.getPokemonById(id);
  return pokemon;
};
