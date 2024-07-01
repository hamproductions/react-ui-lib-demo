import { PokemonDetails } from "@/app/components/pokemon/PokemonDetails";
import { fetchPokemonDetail } from "@/app/utils/fetchPokemons";
import { Button } from "components/ui/button";
import { Heading } from "components/ui/heading";
import { Link } from "components/ui/link";
import { Center, Stack } from "styled-system/jsx";

const SSRPage = async ({ params }: { params: { pokemon: string } }) => {
  const id = Number(params.pokemon);
  const data = await fetchPokemonDetail(id);

  return (
    <Center flex={1}>
      <Stack>
        <Link href="/ssr">Back</Link>
        <PokemonDetails data={data} />
      </Stack>
    </Center>
  );
};

export default SSRPage;
