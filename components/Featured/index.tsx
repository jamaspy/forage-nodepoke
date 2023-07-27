import React from "react";
import { SecondaryButton, LikeButton } from "../Buttons";
import { PokemonType } from "pokenode-ts";

interface FeaturedSectionProps {
  id: number;
  name: string;
  types: PokemonType[];
}

export const FeaturedSection = ({ id, name, types }: FeaturedSectionProps) => {
  return (
    <div
      className="bg-login bg-center bg-cover w-full h-96 p-8 flex-col flex items-start justify-center"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 81%, 0% 100%)" }}
    >
      <p
        className="text-5xl text-white font-semibold capitalize"
        style={{ textShadow: "1px 1px 1px black" }}
      >
        {name}
      </p>
      <p
        className="text-3xl text-white font-semibold capitalize"
        style={{ textShadow: "1px 1px 1px black" }}
      >
        {types.map((type: PokemonType) => type.type.name).join(", ")}
      </p>
      <div className="flex flex-row gap-4 mt-8">
        <SecondaryButton label="View" route={`/pokemon/${id}`} />
        <LikeButton id={id} />
      </div>
    </div>
  );
};

export default FeaturedSection;
