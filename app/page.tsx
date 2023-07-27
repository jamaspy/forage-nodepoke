import { Nav, Footer } from "@/components/Layout";
import { getAllPokemons } from "@/lib/pokemons";
import { PokemonCard } from "@/components/PokemonCard";
import { Row } from "@/components/Row";
import SearchPokemonSection from "@/components/Search";
import FeaturedSection from "@/components/Featured";
import { getRandomNumber } from "@/lib/utils/getRandomNumber";

const Home = async () => {
  const { pokemonsWithImages } = await getAllPokemons();

  const featuredPokemon =
    pokemonsWithImages && pokemonsWithImages[getRandomNumber(10)];

  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <Nav />
      <FeaturedSection
        id={featuredPokemon.id}
        name={featuredPokemon.name}
        types={featuredPokemon.types}
      />
      <SearchPokemonSection />
      <p className="text-3xl text-white font-bold mb-2 self-start pl-4 mt-8">
        All Pokemon
      </p>
      <Row>
        {pokemonsWithImages.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
      <p className="text-3xl text-white font-bold mb-2 self-start pl-4 mt-8">
        New Releases
      </p>
      <Row>
        {pokemonsWithImages.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
      <Footer />
    </main>
  );
};
export default Home;
