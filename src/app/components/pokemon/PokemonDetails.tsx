import { PokemonDetail } from "@/api";
import { Heading } from "components/ui/heading";
import { Text } from "components/ui/text";
import { Center, Stack, Wrap, styled } from "styled-system/jsx";

export const PokemonDetails = ({ data }: { data: PokemonDetail }) => {
  const { name, types, sprites, moves, abilities } = data;

  return (
    <Center textAlign="center">
      <Stack alignItems="center">
        <Heading as="h1">{name.toLocaleUpperCase()}</Heading>
        <Wrap>
          {sprites.front_default && (
            <styled.img
              alt={name}
              height="200px"
              w="auto"
              src={sprites.front_default}
            />
          )}
          {sprites.back_default && (
            <styled.img
              alt={name}
              height="200px"
              w="auto"
              src={sprites.back_default}
            />
          )}
        </Wrap>
        <Heading as="h2">Types</Heading>
        <Wrap>
          {types.map((t) => (
            <Text key={t.type.url}>{t.type.name}</Text>
          ))}
        </Wrap>
        <Heading as="h2">Abilities</Heading>
        <Stack>
          <Wrap gap="1">
            {abilities.map((m) => {
              return <Text key={m.ability.url}>{m.ability.name}</Text>;
            })}
          </Wrap>
        </Stack>
        <Heading as="h2">Moves</Heading>
        <Stack>
          <Wrap gap="1">
            {moves.map((m) => {
              return <Text key={m.move.url}>{m.move.name}</Text>;
            })}
          </Wrap>
        </Stack>
      </Stack>
    </Center>
  );
};
