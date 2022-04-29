import { Flex, Input } from "@chakra-ui/react";
import { Icon } from "../../icons";
import { RiSearch2Line } from 'react-icons/ri';

export function SearchInput() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.600"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      display={{ sm: 'none', md: 'flex' }}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar projeto"
        mx="4"
        _placeholder={{
          color: 'gray.600'
        }} 
        size="sm"
      />
      <Icon as={RiSearch2Line} fontSize="20" />
    </Flex>
  );
}