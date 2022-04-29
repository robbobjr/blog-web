import { 
  AlertDialog, 
  AlertDialogBody, 
  AlertDialogContent, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogOverlay, 
  Button, 
  useDisclosure 
} from "@chakra-ui/react"
import { cloneElement, useCallback, useRef } from "react"

export function Alert({ children, title, description, handler }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef();

  const handleConfirm = useCallback(async () => {
    await handler().catch(console.error);
    onClose()
  }, [onClose, handler]);

  return (
    <>
      {cloneElement(children, { onClick: onOpen })}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="gray.800">
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>
              {description}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} colorScheme="linkedin">
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={handleConfirm} ml={3}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}