import { Flex, Icon } from "@chakra-ui/react";

export function ModalIcon({ isPressed, icon, ...props }) {
  return (
    <Flex
      bg={isPressed ? "gray.900" : "gray.600"} 
      borderRadius="md"
      cursor="pointer" 
      justify="center" 
      align="center" 
      px="2" 
      py="1" 
      {...props}
    >
      <Icon as={icon} fontSize={22} color="gray.50" />
    </Flex>
  );
}