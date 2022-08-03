import { Button, Flex, Icon } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { UserDto } from "../../../services/api/openapi";
import { useAuth } from "../../../states/hooks/use-auth";
import { CreatePostModal } from "../../organisms/create-post-modal";

export function CreatePostButton() {
  const { data } = useAuth();
  return (
    <Flex
      placeContent="center"
      position="fixed"
      bottom="10vh"
      right="2.5%"
      display={data?.user?.role === UserDto.role.ADMIN ? "flex" : "none"}
    >
      <CreatePostModal>
        <Button
          w="10"
          h="10"
          color="purple.400"
          background="gray.800"
          borderRadius="50%"
          _hover={{ background: "gray.800" }}
        >
          <Icon
            as={GoPlus}
            w="4"
            h="4" 
          />
        </Button>
      </CreatePostModal>
    </Flex>
  );
}