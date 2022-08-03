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
import { logger } from "../../../services/logger";

export function Alert({ children, title, description, handler }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef();

  const handleConfirm = useCallback(async () => {
    await handler().catch(error => logger.error({ 
      error, 
      context: "Alert", 
      msg: "handleConfirm" 
    }));
    onClose()
  }, [onClose, handler]);

  return (
    <>
      {cloneElement(children, { onClick: onOpen })}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
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
              <Button ref={cancelRef} onClick={onClose} bg="gray.600">
                Cancelar
              </Button>
              <Button bg="pink.400" onClick={handleConfirm} ml={3}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}