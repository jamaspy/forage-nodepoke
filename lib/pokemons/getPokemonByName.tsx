import { client } from "./client";

export const getPokemonByName = async (name: string) => {
  const pokemon = await client.getPokemonByName(name);
  return pokemon;
};
