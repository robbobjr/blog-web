import { InputProps as CInputProps, Input as CInput, FormLabel, FormControl } from "@chakra-ui/react";

interface InputProps extends CInputProps {
  name: string;
  type: string;
  label: string;
}

export default function Input({ name, type, label, ...props }: InputProps) {
  return (
    <FormControl>
    <FormLabel htmlFor={name}>
      {label}
    </FormLabel>
      <CInput
        id={name}
        name={name}
        type={type}
        focusBorderColor="pink.500"
        variant="filled"
        bg="gray.900"
        _hover={{
          bgColor: 'gray.900'
        }} 
        size="lg"
        {...props}
      />
    </FormControl>
  )
}