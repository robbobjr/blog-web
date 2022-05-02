import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { simpleHover } from "../../../styles/theme";

interface CircularIconProps extends FlexProps {
  icon: IconType;
  iconColor?: string;
}

export function CircularIcon({ icon, iconColor, ...props }: CircularIconProps) {
  return (
    <Flex
      cursor="pointer"
      bg="gray.800"
      borderRadius="50%"
      align="center"
      justify="center"
      p="2"
      _hover={simpleHover}
      {...props}
    >
      <Icon as={icon} fontSize={20} color={iconColor}/>
    </Flex>
  );
}