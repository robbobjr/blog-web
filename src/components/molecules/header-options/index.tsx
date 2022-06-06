import { HStack } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { UserDto } from "../../../services/api/openapi";
import { useAuth } from "../../../states/hooks/use-auth";
import { HeaderIcon } from "../../atoms/header-icon";
import { CreatePostModal } from "../../organisms/create-post-modal";

export function HeaderOptions() {
  const { data } = useAuth(); 

  return (
    <HStack
      spacing="4"
      pr={[0, "8", "8"]}
      py="1"
      mx="8"
      color="gray.600"
      ml={{ sm: 'auto', md: "8" }}
      display={{ base: "none", sm: "inherit" }}
    >
      {data?.user?.role === UserDto.role.ADMIN && (
        <CreatePostModal>
          <HeaderIcon icon={GoPlus} />
        </CreatePostModal>
      )}
    </HStack> 
  );
}