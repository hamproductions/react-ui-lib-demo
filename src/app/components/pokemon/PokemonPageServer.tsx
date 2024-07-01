import { fetchPokemons } from "@/app/utils/fetchPokemons";
import { Stack } from "styled-system/jsx";
import { PokemonItem } from "./PokemonItem";

export const PokemonPageServer = async (props: {
  page: number;
  urlPrefix?: string;
}) => {
  const pokemons = await fetchPokemons(props.page);

  return (
    <Stack gap="1">
      {pokemons.results?.map((r) => {
        return <PokemonItem data={r} key={r.url} urlPrefix={props.urlPrefix} />;
      })}
    </Stack>
  );
};
