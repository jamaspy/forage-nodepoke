"use client";
import React from "react";
import { Row } from "../Row";
import { PokemonCard } from "../PokemonCard";
import { InputRow } from "../Forms";
import { useSearchByName } from "@/hooks/useSearchByName";
export const SearchPokemonSection = () => {
  const { pokemon, loading, error, handleSearch, handleClear } =
    useSearchByName();
  const [searchName, setSearchName] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSearch(searchName);
  };

  return (
    <>
      <p className="text-3xl text-white font-bold mb-2 self-start pl-4 mt-8">
        Search By Name
      </p>
      <form
        className="w-full flex flex-row items-center pl-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputRow
          name="search"
          label="Search by Pokemon Name"
          value={searchName}
          setValue={setSearchName}
        />
        {pokemon ? (
          <button
            className="h-10 rounded-md bg-slate-300 px-3 py-2 ml-4"
            onClick={handleClear}
          >
            Clear
          </button>
        ) : (
          <button
            disabled={searchName.length === 0}
            className="h-10 rounded-md bg-slate-300 px-3 py-2 ml-4"
            onClick={handleSubmit}
          >
            Search
          </button>
        )}
      </form>
      {!!pokemon && (
        <Row>
          <PokemonCard pokemon={pokemon} />
        </Row>
      )}
      {searchName && loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-white">Error, please check spelling...</p>}
    </>
  );
};

export default SearchPokemonSection;
