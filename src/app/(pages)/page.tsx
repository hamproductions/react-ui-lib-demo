import { Text } from 'components/ui/text';
import { Center, Stack } from 'styled-system/jsx';

export default function Home() {
  return (
    <Center flex={1} w="full" minH="screen">
      <Stack>
        <Text>React Templateだよ</Text>
        <Center></Center>
      </Stack>
    </Center>
  );
}
