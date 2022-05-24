import { Textarea as CTextarea, TextareaProps } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";

export function Textarea(props: TextareaProps) {
  return (
    <CTextarea 
      as={ResizeTextarea}
      overflow="hidden"
      minRows={1}
      variant="filled" 
      bg="gray.800"
      minH="50vh"
      focusBorderColor="gray.800"
      color="gray.600"
      resize="none"
      _hover={{ bg: "gray.800" }}
      {...props}
    />
  );
}