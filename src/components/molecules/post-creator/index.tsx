import { Avatar, Box, Text } from "@chakra-ui/react";
import { UserDto } from "../../../services/api/openapi";

type PostCreatorProps = {
  data: UserDto;
}

export function PostCreator({ data: user }: PostCreatorProps) {
  return (
    <Box>
      <Avatar size="xs" name={user?.name} src={user?.image}/>
      <Text 
        fontSize="smaller" 
        color="gray.600" 
        ml="2" 
        display={{ base: 'none' ,sm: 'none', md: 'inherit' }}
      >
        Escrito por {user?.name}
      </Text>
    </Box>
  );
}