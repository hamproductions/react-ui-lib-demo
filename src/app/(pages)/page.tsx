import { Heading } from "components/ui/heading";
import { Text } from "components/ui/text";
import { Center, Stack } from "styled-system/jsx";
import { NavigationLinks } from "../components/layout/NavigationLinks";

export default function Home() {
  return (
    <Center minH="screen" w="screen">
      <Stack>
        <Text>Reactサーバーコンポーネントいろいろ</Text>
        <NavigationLinks />
      </Stack>
    </Center>
  );
}
