"use client";

import { useRouter } from "next/navigation";
import { Pagination } from "./Pagination";

export const SSRPagination = ({
  page,
  previousUrl,
  nextUrl,
}: {
  page: number;
  previousUrl: string;
  nextUrl: string;
}) => {
  const router = useRouter();
  return (
    <Pagination
      page={page}
      onPrevious={() => router.push(previousUrl)}
      onNext={() => router.push(nextUrl)}
    />
  );
};
