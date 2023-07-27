import React from "react";
import Image from "next/image";
import { Pokemon } from "pokenode-ts";
import Link from "next/link";
export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link
      data-testid="PokemonCard"
      href={`/pokemon/${pokemon.id}`}
      key={pokemon.id}
      className="hover:origin-bottom hover:-rotate-2 transition-all duration-150 ease-in bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-8 border-yellow-300 rounded-3xl shadow-md p-4 inline-block mx-2"
    >
      <div className="rounded-full border bg-white shadow flex flex-row items-center justify-center w-24 h-24 mx-auto">
        <Image
          src={pokemon.sprites.front_default || ""}
          alt={pokemon.name}
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Image src="/images/ball.webp" alt="pokeball" width={20} height={20} />
        <p className="text-xl lg:text-2xl capitalize font-semibold mx-2 text-center">
          {pokemon.name}
        </p>
        <Image src="/images/ball.webp" alt="pokeball" width={20} height={20} />
      </div>
      <div className="flex flex-row items-center justify-center">
        <p className="font-semibold mr-1">Types: </p>
        <p className="text-lg capitalize">
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </p>
      </div>
    </Link>
  );
};
