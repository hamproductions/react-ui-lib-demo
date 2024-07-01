"use client";

import { Button } from "components/ui/button";
import { Text } from "components/ui/text";
import { HStack } from "styled-system/jsx";

export const Pagination = ({
  page,
  onPrevious,
  onNext,
}: {
  page: number;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  return (
    <HStack>
      <Button onClick={() => onPrevious()} disabled={page === 0}>
        Previous
      </Button>
      <Text>Page {page + 1}</Text>
      <Button onClick={() => onNext()}>Next</Button>
    </HStack>
  );
};
