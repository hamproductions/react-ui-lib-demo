import { Heading } from "components/ui/heading";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Center, Stack } from "styled-system/jsx";
import { PokemonListClient } from "./PokemonListClient";

const CSRPage = () => {
  return (
    <Center flex={1}>
      <Stack w="full">
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
