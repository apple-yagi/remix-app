import { json, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { PokemonsResponse } from "~/types/pokemons";

export const loader: LoaderFunction = async () => {
  const apiEndpoint = process.env.POKEMON_ZUKANN_API as string;

  const res = await fetch(apiEndpoint);

  const pokemonsResponse: PokemonsResponse = await res.json();

  return json(pokemonsResponse);
};

export const meta: MetaFunction = () => ({
  title: "Pokemons",
  description: "Pokemon Zukan",
});

export default function Pokemons() {
  const data = useLoaderData<PokemonsResponse>();

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="font-bold text-gray-600">Pokemons</h1>
        <div className="grid-cols-6">
          {data.results.map((pokemon) => (
            <div key={pokemon.no} className="border-2 shadow-sm">
              <h3>{pokemon.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
