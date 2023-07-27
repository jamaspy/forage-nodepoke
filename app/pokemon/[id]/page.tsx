import React from "react";
import Image from "next/image";
import { Pokemon } from "pokenode-ts";
import { getAllPokemons, getPokemonById } from "@/lib/pokemons";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { LikeButton } from "@/components/Buttons";
import { Nav } from "@/components/Layout";
export async function generateStaticParams() {
  const { pokemonsWithImages } = await getAllPokemons();

  const paths = pokemonsWithImages.map((pokemon: Pokemon) => {
    {
      return { params: { id: pokemon.id } };
    }
  });

  return paths;
}

const PokemonId = async ({ params }: { params: { id: string } }) => {
  const pokemon = await getPokemonById(+params.id);

  return (
    <div className="bg-profile bg-cover md:bg-right bg-center min-h-screen">
      <Nav />
      <div className="p-12">
        <Link
          href="/"
          className="text-white flex flex-row items-center mb-12 hover:text-red-600"
        >
          <FaChevronLeft className="mr-2" />
          Back
        </Link>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="md:bg-white hover:rotate-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block rounded-full">
            <Image
              src={pokemon.sprites.front_shiny || "/images/ball.webp"}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </div>
          <div className="md:bg-white hover:rotate-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-block rounded-full">
            <Image
              src={pokemon.sprites.back_shiny || "/images/ball.webp"}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-8">
          <p className="text-white text-5xl capitalize font-black mb-4">
            {pokemon.name}
          </p>
          <LikeButton id={pokemon.id} />
        </div>
        <div className="mb-4">
          <p className="text-2xl font-bold text-white mb-2">Bio</p>
          <p className="text-white">
            <span className="font-semibold">Height: </span> {pokemon.height}
          </p>
          <p className="text-white">
            <span className="font-semibold">Weight: </span> {pokemon.weight}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-2xl font-bold text-white mb-2">Stats</p>
          {pokemon.stats.map((stat, index) => (
            <p key={index} className="text-white">
              <span className="font-semibold">{stat.stat.name}:</span>{" "}
              {stat.base_stat}
            </p>
          ))}
        </div>

        <p className="text-2xl font-bold text-white mb-2">Types</p>
        <p className="text-white">
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonId;
