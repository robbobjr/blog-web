import { Button, ModalFooter, HStack } from "@chakra-ui/react"
import { AiFillEye } from "react-icons/ai";
import { ModalIcon } from "../../atoms/modal-icon";

type CreatePostModalFooterProps = {
  isVisible: boolean;
  handleMKVisibility: () => void;
  handleCreatePost: () => void;
};

export function CreatePostModalFooter({
  isVisible,
  handleCreatePost,
  handleMKVisibility,
}: CreatePostModalFooterProps) {
  return (
    <ModalFooter mx="3">
      <HStack spacing="4" mr="auto">
      <ModalIcon 
        isPressed={isVisible} 
        onClick={handleMKVisibility} 
        icon={AiFillEye}
      />
      </HStack>
      <Button bg="gray.600" onClick={handleCreatePost}>
        Submeter
      </Button>
    </ModalFooter>
  );
}