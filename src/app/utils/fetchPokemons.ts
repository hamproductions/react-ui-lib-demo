import { PokemonApi, PokemonDetail } from "../../api";

const api = new PokemonApi();

export const fetchPokemons = (page: number) => {
  return api.pokemonList({
    limit: 20,
    offset: page,
  });
};

export const fetchPokemonDetail = (id: number) => {
  return api.pokemonRetrieve({
    id: id.toString(),
  });
};
