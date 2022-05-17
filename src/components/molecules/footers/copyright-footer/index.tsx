import { Text } from "@chakra-ui/react";
import { Link } from "../../../atoms/link";

export function CopyrightFooter() {
  return (
    <Link href="/portfolio">
      <Text fontSize="12" fontWeight="thin" opacity="0.5" color="gray.50" textAlign="center">
        © 2022 Roberto Junior
      </Text>
    </Link>
  ); 
}