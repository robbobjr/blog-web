import { Stack } from "@chakra-ui/react";
import { CopyrightFooter } from "../molecules/footers/copyright-footer";
import { Topics } from "./topics";

export function Footer({ data }) {
  return (
    <Stack spacing="2" mx="auto" pb="4">
      <Topics tags={data.tags} maxW="400px"/>
      <CopyrightFooter/>
    </Stack>
  );
}