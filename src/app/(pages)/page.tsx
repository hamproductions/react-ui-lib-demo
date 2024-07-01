import { Heading } from "components/ui/heading";
import { Text } from "components/ui/text";
import { Center, Stack } from "styled-system/jsx";
import { NavigationLinks } from "../components/layout/NavigationLinks";

export default function Home() {
  return (
    <Center flex={1} w="full" minH="screen">
      <Stack>
        <Text>Reactサーバーコンポーネントいろいろ</Text>
        <Center>
          <NavigationLinks />
        </Center>
      </Stack>
    </Center>
  );
}
