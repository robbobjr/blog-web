import { Flex } from "@chakra-ui/react";

export function LoginOptionsContainer({ children }) {
  return (
    <Flex
      as="form"
      w="100%"
      maxW={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      m="4"
    >
      {children}
    </Flex>  
  );
}