import { client } from "@/lib/pokemons/client";
import { getFavouritePokemon } from "@/lib/pokemons/getFavouritePokemon"; // assuming your function is in pokemonService.ts

jest.mock("../../../lib/pokemons/client");

describe("getFavouritePokemon", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (client.getPokemonById as jest.Mock).mockClear();
  });

  it("fetches favourite pokemons and their images", async () => {
    const mockPokemonWithImage = {
      id: 1,
      name: "bulbasaur",
      sprites: {
        front_default: "bulbasaur.png",
      },
    };

    (client.getPokemonById as jest.Mock).mockResolvedValue(
      mockPokemonWithImage
    );

    // Mock localStorage
    const likedPokemons = [1];
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(likedPokemons));

    const result = await getFavouritePokemon();

    expect(result).toEqual({
      status: "OK",
      likedPokemons: [mockPokemonWithImage],
    });

    expect(client.getPokemonById).toHaveBeenCalledTimes(1);
    expect(client.getPokemonById).toHaveBeenCalledWith(1);
  });

  it("returns empty array if no liked pokemons", async () => {
    // Mock localStorage
    Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));

    const result = await getFavouritePokemon();

    expect(result).toEqual({
      status: "OK",
      likedPokemons: [],
    });

    expect(client.getPokemonById).not.toHaveBeenCalled();
  });
});
