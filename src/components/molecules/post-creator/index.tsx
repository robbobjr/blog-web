import { Avatar, Flex, Text } from "@chakra-ui/react";
import { UserDto } from "../../../services/api/openapi";

type PostCreatorProps = {
  data: UserDto;
}

export function PostCreator({ data: user }: PostCreatorProps) {
  return (
    <Flex align="center" justify="center">
      <Avatar size="xs" name={user?.name} src={user?.image}/>
      <Text 
        fontSize="smaller" 
        color="gray.600" 
        ml="2" 
        display={{ base: 'none' ,sm: 'none', md: 'inherit' }}
      >
        {user?.name}
      </Text>
    </Flex>
  );
}