import { PokemonApi } from "../../api";

const api = new PokemonApi();

export const fetchPokemons = (page: number) => {
  return api.pokemonList({
    limit: 20,
    offset: page,
  });
};
