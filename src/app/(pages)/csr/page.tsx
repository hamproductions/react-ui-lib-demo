import { PokemonListClient } from "@/app/components/pokemon/PokemonListClient";
import { Heading } from "components/ui/heading";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Center, Stack } from "styled-system/jsx";

const CSRPage = () => {
  return (
    <Center minH="screen">
      <Stack>
        <Heading>This is Client Side Rendered</Heading>
        <Suspense>
          <PokemonListClient />
        </Suspense>
      </Stack>
    </Center>
  );
};

export default dynamic(() => Promise.resolve(CSRPage), {
  ssr: false,
});
