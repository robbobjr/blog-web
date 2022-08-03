import { Flex } from "@chakra-ui/react";

export function HeaderContainer({ children}) {
  return (
    <Flex 
      as="header" 
      width="100%"
      visibility={"initial"}
      align="center" 
      px="10"
      py="4"
      bg="gray.800"
      position="sticky"
      zIndex="10"	
      top="0"
    >
      {children}
    </Flex>
  );
}