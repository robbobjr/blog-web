import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Link } from "./link";

export function BlogLogo() {
  return (
    <Box display={{ base: "none", sm: 'none', md: 'inherit' }} mr="4">
      <Link href="/ptbr">
        <Image src="/static/logo.svg" width={60} height="100%" alt="blog.rbjr" />
      </Link>
    </Box>
  );
}