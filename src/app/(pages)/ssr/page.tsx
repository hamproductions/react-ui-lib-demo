import { Pagination } from "@/app/components/layout/Pagination";
import { SSRPagination } from "@/app/components/layout/SSRPagination";
import { PokemonPageServer } from "@/app/components/pokemon/PokemonPageServer";
import { Heading } from "components/ui/heading";
import { Center, Stack } from "styled-system/jsx";

const SSRPage = ({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { page: string };
}) => {
  const page = searchParams?.page ? Number(searchParams.page) : 0;

  return (
    <Center minH="screen">
      <Stack>
        <Heading>This is SSR Rendered</Heading>
        <PokemonPageServer page={page} urlPrefix="/ssr" />
        <SSRPagination
          page={page}
          previousUrl={`?page=${page - 1}`}
          nextUrl={`?page=${page + 1}`}
        />
      </Stack>
    </Center>
  );
};

export default SSRPage;
