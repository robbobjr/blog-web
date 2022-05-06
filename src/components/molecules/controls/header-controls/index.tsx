import { HStack } from "@chakra-ui/react";
import { AiOutlineCaretUp } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { UserDto } from "../../../../services/api/openapi";
import { useAuth } from "../../../../states/hooks/use-auth";
import { CircularIcon } from "../../../atoms/icons/circular-icon";
import { CreatePostModal } from "../../modals/create-post-modal";

/**
 * @summary
 * Buttons inside the header to control pub creation and notifications 
 */
export function HeaderControls() {
  const { data } = useAuth(); 

  return (
    <HStack
      spacing="4"
      pr={[0, "8", "8"]}
      py="1"
      mx="8"
      color="gray.600"
      borderRightWidth={1}
      borderColor="gray.800"
      ml={{ sm: 'auto', md: "8" }}
      display={{ base: "none", sm: "inherit" }}
    >
      {data && (
        <CircularIcon 
          icon={AiOutlineCaretUp} 
        />
      )}
      {data?.user?.permission === UserDto.permission.ADMIN && (
        <CreatePostModal>
          <CircularIcon icon={GoPlus} />
        </CreatePostModal>
      )}
    </HStack> 
  );
}