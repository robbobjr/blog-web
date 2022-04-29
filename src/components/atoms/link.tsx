import NextLink from "next/link";

export function Link({ href,children }) {
  return (
    <NextLink passHref={true} href={href}>
      <a>
        {children}
      </a>
    </NextLink>
  );
}