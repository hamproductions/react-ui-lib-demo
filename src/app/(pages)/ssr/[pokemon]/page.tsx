import { Pagination } from "@/app/components/layout/Pagination";
import { SSRPagination } from "@/app/components/layout/SSRPagination";
import { PokemonPageServer } from "@/app/components/pokemon/PokemonPageServer";
import { Heading } from "components/ui/heading";
import { useParams } from "next/navigation";
import { Center, Stack } from "styled-system/jsx";

const SSRPage = ({ params }: { params: { pokemon: string } }) => {
  const id = Number(params.pokemon);

  return (
    <Center minH="screen">
      <Stack>
        <Heading>This is SSR Rendered</Heading>
      </Stack>
    </Center>
  );
};

export default SSRPage;
