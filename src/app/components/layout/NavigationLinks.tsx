import Link from "next/link";
import { Wrap } from "styled-system/jsx";

export const NavigationLinks = () => {
  return (
    <Wrap>
      <Link href="/ssr">SSR</Link>
      <Link href="/csr">CSR</Link>
    </Wrap>
  );
};
