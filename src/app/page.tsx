import { Heading } from "components/ui/heading";
import { Text } from "components/ui/text";
import { Suspense, createContext, forwardRef } from "react";
import { Center, Stack } from "styled-system/jsx"
import { SlowComponentUse } from "./slow-component/SlowComponent";

export default function Home() {
  return (
    <Center minH="screen" w="screen">
     <Stack>
     <Text>SlowComponent.com</Text>
      <Heading>With use function</Heading>
      <Suspense fallback={<Text animation="spin">Loading</Text>}>
        <SlowComponentUse/>
      </Suspense>
     </Stack>
    </Center>
  );
}