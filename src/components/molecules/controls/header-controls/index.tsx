import { Flex, HStack } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { Icon } from "../../../atoms/icons";
import { CreatePostModal } from "../../modals/create-post-modal";

/**
 * @summary
 * Buttons inside the header to control pub creation and notifications 
 */
export function HeaderControls() {
  return (
    <HStack
      spacing="4"
      pr="8"
      py="1"
      mx="8"
      color="gray.600"
      borderRightWidth={1}
      borderColor="gray.800"
    >
      <CreatePostModal>
        <Flex bg="gray.800" borderRadius="50%" align="center" justify="center" p="2">
          <Icon as={GoPlus} fontSize={20} />
        </Flex>
      </CreatePostModal>
    </HStack> 
  );
}