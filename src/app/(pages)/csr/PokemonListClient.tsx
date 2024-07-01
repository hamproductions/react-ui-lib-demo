"use client";

import { Suspense, use, useState } from "react";
import { Stack } from "styled-system/jsx";

import { fetchPokemons } from "@/app/utils/fetchPokemons";
import { Skeleton } from "components/ui/skeleton";
import { PokemonItem } from "@/app/components/pokemon/PokemonItem";
import { Pagination } from "@/app/components/layout/Pagination";

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
    <Stack w="full">
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
        <PokemonPage page={page * 20} urlPrefix="/csr/details?id=" />
      </Suspense>
      <Pagination
        page={page}
        onPrevious={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />
    </Stack>
  );
};
