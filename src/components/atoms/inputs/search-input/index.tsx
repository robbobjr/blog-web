import { Flex, Input } from "@chakra-ui/react";
import { Icon } from "../../icons";
import { RiSearch2Line } from 'react-icons/ri';
import { ChangeEvent, useCallback } from "react";
import { useRouter } from "next/router";
import { timer } from "../../../../utils/times";

export function SearchInput() {
  const history = useRouter();

  const handleInputChange = useCallback(async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    await timer(500);
    const input = event.target.value;
    history.push({ pathname: "/", query: { 
      ...(input && { input }),
    }})
  }, [history]);

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
      display={{ sm: 'none', md: 'flex' }}
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