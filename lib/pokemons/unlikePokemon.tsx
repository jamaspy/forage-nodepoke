export const UnlikePokemon = async (newPokemon: any) => {
  if (typeof window === "undefined") {
    return;
  }
  const currentPokemons = JSON.parse(localStorage.getItem("liked") || "[]");
  const findPokemonToRemove = currentPokemons.indexOf(newPokemon);
  currentPokemons.splice(findPokemonToRemove, 1);

  const withRemovedPokemon = [...currentPokemons];
  localStorage.setItem("liked", JSON.stringify(withRemovedPokemon));
  return { status: "OK", likedPokemons: withRemovedPokemon };
};
