import { Flex } from "@chakra-ui/react";

export function CentralizedContainer({ children }) {
  return (
    <Flex
    w="100vw"
    h="100vh"
    maxW="100vw"
    align="center"
    direction="column"
    justify="center">
      {children}
    </Flex>
  );
}