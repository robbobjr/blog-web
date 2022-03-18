import { IconProps, Icon as ChakraIcon } from "@chakra-ui/react";

export function Icon({...props}: IconProps & { as: any }) {
  return <ChakraIcon {...props} cursor="pointer"/>
}