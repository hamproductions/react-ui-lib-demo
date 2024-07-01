"use client";

import { Suspense, use, useState } from "react";
import { Stack } from "styled-system/jsx";

import { fetchPokemonDetail, fetchPokemons } from "@/app/utils/fetchPokemons";
import { Skeleton } from "components/ui/skeleton";
import { PokemonItem } from "@/app/components/pokemon/PokemonItem";
import { Pagination } from "@/app/components/layout/Pagination";
import { PokemonDetails } from "@/app/components/pokemon/PokemonDetails";
import { useSearchParams } from "next/navigation";

const PokemonDetailsInner = (props: { id: number }) => {
  const data = use(fetchPokemonDetail(props.id));

  return <PokemonDetails data={data} />;
};

export const PokemonDetailsPage = () => {
  const searchParams = useSearchParams();

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
        <PokemonDetailsInner id={Number(searchParams.get("id"))} />
      </Suspense>
    </Stack>
  );
};
