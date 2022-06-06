import { Flex } from "@chakra-ui/react";

export function HeaderContainer({ children}) {
  return (
    <Flex 
      as="header" 
      width="100%"
      visibility={"initial"}
      h="20" 
      minH="20" 
      maxW={1480} 
      mx="auto" 
      mt="4" 
      justify="flex-end"
      align="center" 
      px="10"
    >
      {children}
    </Flex>
  );
}