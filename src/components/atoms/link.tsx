import NextLink, { LinkProps } from "next/link";
import { ReactElement } from "react";

export function Link({ 
  href, 
  children, 
  ...props 
}: LinkProps & { children: ReactElement[] | ReactElement }) {
  return (
    <NextLink passHref={true} href={href} {...props}>
      <a>
        {children}
      </a>
    </NextLink>
  );
}