// write a test for pokemonCard component

import React from "react";
import { render, screen } from "@testing-library/react";
import { PokemonCard } from "@/components/PokemonCard";
import "@testing-library/jest-dom";
import { client } from "@/lib/pokemons/client";
describe("PokemonCard", () => {
  it("renders a pokemon card with correct name", async () => {
    const pokemon = await client.getPokemonByName("bulbasaur");
    render(<PokemonCard pokemon={pokemon} />);
    const card = screen.getByTestId("PokemonCard");
    const name = screen.getByText("bulbasaur");
    expect(card).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
