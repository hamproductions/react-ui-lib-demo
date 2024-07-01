import { PokemonDetails } from "@/app/components/pokemon/PokemonDetails";
import { fetchPokemonDetail } from "@/app/utils/fetchPokemons";
import { Button } from "components/ui/button";
import { Heading } from "components/ui/heading";
import { Link } from "components/ui/link";
import dynamic from "next/dynamic";
import { Center, Stack } from "styled-system/jsx";
import { PokemonDetailsPage } from "./PokemonDetailsPage";

const CSRPage = async () => {
  return (
    <Center flex={1}>
      <Stack w="full">
        <Link href="/csr">Back</Link>
        <PokemonDetailsPage />
      </Stack>
    </Center>
  );
};

export default dynamic(() => Promise.resolve(CSRPage), {
  ssr: false,
});
