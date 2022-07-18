import { Stack } from "@chakra-ui/react";
import { Copyright } from "../../molecules/copyright";
import { Topics } from "../../molecules/topics";

export function Footer({ data: tags }) {
  return (
    <Stack spacing="2" mx="auto" pb="4">
      <Topics data={tags} maxW="400px"/>
      <Copyright />
    </Stack>
  );
}