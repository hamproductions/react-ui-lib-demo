import { PokemonSummary } from "@/api";
import { Text } from "components/ui/text";
import Link from "next/link";
import { Stack } from "styled-system/jsx";

export const PokemonItem = ({
  data,
  urlPrefix,
}: {
  data: PokemonSummary;
  urlPrefix?: string;
}) => {
  const { name, url } = data;
  console.log(url);
  return (
    <Stack>
      <Link href={`${urlPrefix}/${url.split("/").at(-2)}`} key={url}>
        {name}
      </Link>
    </Stack>
  );
};
