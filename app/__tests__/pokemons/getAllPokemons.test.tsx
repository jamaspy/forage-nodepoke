import { client } from "@/lib/pokemons/client";
import { getAllPokemons } from "@/lib/pokemons/getAllPokemons";

jest.mock("../../../lib/pokemons/client");

describe("getAllPokemons", () => {
  it("fetches all pokemons and their images", async () => {
    const mockListPokemons = {
      results: [{ name: "bulbasaur" }, { name: "charmander" }],
    };

    const mockPokemonWithImage = {
      name: "bulbasaur",
      sprites: {
        front_default: "bulbasaur.png",
      },
    };

    (client.listPokemons as jest.Mock).mockResolvedValue(mockListPokemons);
    (client.getPokemonByName as jest.Mock).mockResolvedValue(
      mockPokemonWithImage
    );

    const result = await getAllPokemons();

    expect(result).toEqual({
      pokemons: mockListPokemons,
      pokemonsWithImages: [mockPokemonWithImage, mockPokemonWithImage],
    });

    expect(client.listPokemons).toHaveBeenCalled();
    expect(client.getPokemonByName).toHaveBeenCalledTimes(2);
    expect(client.getPokemonByName).toHaveBeenCalledWith("bulbasaur");
    expect(client.getPokemonByName).toHaveBeenCalledWith("charmander");
  });
});
