import { Flex } from "@chakra-ui/react";

export function CentralizedContainer({ children }) {
  return (
    <Flex
      p="4"
      w="100vw"
      h="100vh"
      align="center"
      direction="column"
      justify="center"
    >
      {children}
    </Flex>
  );
}