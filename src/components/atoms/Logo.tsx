import { Flex, Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Flex as={Link} passHref={true} href={'/'} cursor="pointer">
      <a>
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        {"<startgo/>"}
        </Text>
      </a>
    </Flex>
  );
}