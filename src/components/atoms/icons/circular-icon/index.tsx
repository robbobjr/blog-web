import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { simpleHover } from "../../../../styles/theme";

interface CircularIconProps extends FlexProps {
  icon: IconType;
  isPressed?: boolean;
}

export function CircularIcon({ icon, isPressed, ...props }: CircularIconProps) {
  return (
    <Flex
      cursor="pointer"
      bg="gray.800"
      borderRadius="50%"
      align="center"
      justify="center"
      _hover={simpleHover}
      p="2"
      {...props}
    >
      <Icon as={icon} fontSize={20}  color={isPressed && "pink.400"}/>
    </Flex>
  );
}