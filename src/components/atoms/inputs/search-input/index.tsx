import { Flex, Input } from "@chakra-ui/react";
import { Icon } from "../../icons";
import { RiSearch2Line } from 'react-icons/ri';
import { ChangeEvent, useCallback } from "react";
import { debounce } from "../../../../utils/debounce";

export function SearchInput({ handleInput }) {
  const handleInputChange = useCallback(async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.target.value;
    debounce(500, () =>
      handleInput(input)
    );
  }, [handleInput]);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxWidth={400}
      alignSelf="center"
      color="gray.600"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      display={{ base: "none", sm: 'none', md: 'flex' }}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar projeto"
        onChange={handleInputChange}
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