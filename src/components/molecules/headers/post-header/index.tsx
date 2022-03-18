import { Avatar, Flex, Text } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { PostIcon } from "../../../atoms/icons/post-icon";

export function PostHeader({ user, participation }) {
  return (
    <Flex align="center">
      <Avatar size="xs" name={user.name} src={user.image}/>
      <Text fontSize="smaller" color="gray.600" ml="2">
        Enviado por {user.name}
      </Text>
      <Flex ml="auto">
        {participation && (
          <PostIcon
            icon={FaHandshake}
            text={`Participação ofertada:${participation}%`} 
          />
        )}
      </Flex>
    </Flex>
  )
}