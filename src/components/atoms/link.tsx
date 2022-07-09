import NextLink, { LinkProps } from "next/link";
import { ReactElement } from "react";

export function Link({ 
  href, 
  children, 
  target,
  ...props 
}: LinkProps & { children: ReactElement[] | ReactElement, target?: string }) {
  return (
    <NextLink passHref={true} href={href} {...props}>
      <a target={target}>
        {children}
      </a>
    </NextLink>
  );
}