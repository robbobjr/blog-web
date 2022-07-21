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
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useRef, cloneElement, useCallback, useEffect, useState } from "react"
import ResizeTextarea from "react-textarea-autosize";
import { useAuth } from "../../../states/hooks/use-auth";
import { useDraft } from "../../../states/hooks/use-draft";

export function SingleInputModal({ 
  children, 
  handler, 
  modalName,
  textAreaProps,
}) {
  const [defaultValue, setDefaultValue] = useState<string | null>();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleAddDraft, handleGetDraft } = useDraft();

  const initialRef = useRef();
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const { data } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const content = handleGetDraft(modalName);
    setDefaultValue(content);
  }, [isOpen, handleGetDraft, modalName]);

  const handleOpenModal = useCallback(async () => {
    if (!data) return router.push('/login')
    onOpen()
  }, [data, router, onOpen]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    onClose();
    return handler(event);
  }, [onClose, handler]);

  const handleSaveDraft = useCallback(() => {
    if (textAreaRef) {
      const content = textAreaRef?.current?.value;
      handleAddDraft({ field: modalName, content});
    }

    onClose();
  }, [handleAddDraft, textAreaRef, onClose, modalName]); 

  return (
    <>
      { cloneElement(children, { onClick: handleOpenModal }) }
      <Modal
        isCentered={true}
        blockScrollOnMount
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={handleSaveDraft}
        scrollBehavior="inside"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent bg="gray.800" mx="4">
          <form onSubmit={handleSubmit}>
            <ModalHeader color="gray.50">
              <ModalCloseButton  />
            </ModalHeader>
            <ModalBody pb={6} mt="2"> 
              <FormControl display="flex" flexDirection="row">
                <Avatar name={data?.user?.name} src={data?.user?.image} />
                <Textarea 
                  as={ResizeTextarea}
                  minRows={1}
                  maxRows={40}
                  maxH="50vh"
                  variant="filled" 
                  bg="gray.800"
                  focusBorderColor="gray.800"
                  resize="none"
                  ref={textAreaRef}
                  size="lg"
                  name="content"
                  defaultValue={defaultValue}
                  _hover={{ bg: "gray.800" }}
                  {...textAreaProps}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button 
                bg="gray.600" 
                mr={3} 
                type="submit" 
                _hover={{ bgColor: "purple.400" }}
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}