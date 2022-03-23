import { 
  Button, 
  FormControl, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  useDisclosure,
  Textarea,
  Avatar,
  Box,
  HStack,
} from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { useRef, cloneElement, useCallback, useEffect, useState } from "react"
import ResizeTextarea from "react-textarea-autosize";
import { useContent } from "../../../../hooks/useContent";
import { PickEmojiIcon } from "../../../atoms/icons/pick-emoji-icon";
import { PickImageIcon } from "../../../atoms/icons/pick-image-icon";

export function CreatePostModal({ children }) {
  const [defaultValue, setDefaultValue] = useState<string | null>();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef();
  const { handleAddDraft, handleGetDraft } = useContent();
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const { data } = useSession();

  useEffect(() => {
    const content = handleGetDraft('create-post-modal');

    setDefaultValue(content);
  }, [isOpen, handleGetDraft]);

  const emojiPickerHandler = useCallback((emoji: string) => {
    if (!textAreaRef) return;

    textAreaRef.current.value += (emoji);
  }, [textAreaRef]);

  const handleSaveDraft = useCallback(() => {
    if (textAreaRef) {
      const content = textAreaRef?.current?.value;

      handleAddDraft({ field: 'create-post-modal', content});
    }

    onClose();
  }, [handleAddDraft, textAreaRef, onClose]); 

  return (
    <>
      { cloneElement(children, { onClick: onOpen }) }
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={handleSaveDraft}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent bg="gray.800" mx="4">
          <ModalHeader color="gray.50">
            <ModalCloseButton  />
          </ModalHeader>
          <ModalBody pb={6} mt="2">
            <FormControl display="flex" flexDirection="row">
              <Avatar name={data?.user?.name} src={data?.user?.image} />
              <Textarea 
                as={ResizeTextarea}
                overflow="hidden"
                minRows={1}
                placeholder='Aplicativo de delivery para...' 
                variant="filled" 
                bg="gray.800"
                minH="8rem"
                focusBorderColor="gray.800"
                resize="none"
                defaultValue={defaultValue}
                size="lg"
                ref={textAreaRef}
                _hover={{ bg: "gray.800" }}
              />
            </FormControl>
          </ModalBody>
          <Box height="0.5px" bg="gray.700" mx="8"/>
          <ModalFooter mx="3">
            <HStack spacing="4" mr="auto">
              <PickImageIcon />
              <PickEmojiIcon handler={emojiPickerHandler} />
            </HStack>
            <Button bg="gray.600">
              Submeter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}