"use client";

import { Text } from "components/ui/text";
import { Suspense, use, useState } from "react";
import { Stack } from "styled-system/jsx";
import { PokemonApi } from "../../../api";

import { Skeleton } from "components/ui/skeleton";
import { Pagination } from "../layout/Pagination";
import { fetchPokemons } from "@/app/utils/fetchPokemons";
import { PokemonItem } from "./PokemonItem";

const PokemonPage = (props: { page: number; urlPrefix?: string }) => {
  const pokemons = use(fetchPokemons(props.page));

  return (
    <Stack gap="1">
      {pokemons.results?.map((r) => {
        return <PokemonItem data={r} key={r.url} urlPrefix={props.urlPrefix} />;
      })}
    </Stack>
  );
};

export const PokemonListClient = () => {
  const [page, setPage] = useState(0);

  return (
    <Stack>
      <Suspense
        fallback={
          <Stack w="full">
            {Array(20)
              .fill(undefined)
              .map((_, idx) => (
                <Skeleton key={idx} h={4} w="full" />
              ))}
          </Stack>
        }
      >
        <PokemonPage page={page * 20} urlPrefix="/csr" />
      </Suspense>
      <Pagination
        page={page}
        onPrevious={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />
    </Stack>
  );
};
