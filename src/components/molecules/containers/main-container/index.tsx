import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactElement } from "react";

interface MainContainerProps extends FlexProps {
  children: ReactElement;
}

export function MainContainer({ children, ...props }: MainContainerProps) {
  return (
    <Flex my="6" w="100%" maxWidth={1480} mx="auto" px="6" {...props}>
      {children}
    </Flex>
  );
}