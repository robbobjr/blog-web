import { Stack } from "@chakra-ui/react";
import { CopyrightFooter } from "../../molecules/footers/copyright-footer";
import { Topics } from "../../molecules/topics";

export function Footer() {
  return (
    <Stack spacing="2" mx="auto" pb="4">
      <Topics maxW="400px"/>
      <CopyrightFooter />
    </Stack>
  );
}