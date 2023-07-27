export const LikePokemon = async (newPokemon: any) => {
  if (typeof window === "undefined") {
    return;
  }
  const currentPokemons = JSON.parse(localStorage.getItem("liked") || "[]");
  const withNewPokemon = [...currentPokemons, newPokemon];
  localStorage.setItem("liked", JSON.stringify(withNewPokemon));
  return { status: "OK", likedPokemons: withNewPokemon };
};
