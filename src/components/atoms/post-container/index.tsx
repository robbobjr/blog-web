import {  Flex, Stack } from "@chakra-ui/react";
import { useMemo } from "react";
import { PostContainerProps } from "./post-container.type";

export function PostContainer({ 
  children, 
  rightSide,
  leftSide,
  size, 
  ...props 
}: PostContainerProps) {
  const counterSize = useMemo(() => {
    const sizeValues = { md: { minH: 32 }, sm: { minH: 24 } };
    return sizeValues[size];
  }, [size]);

  return (
    <Flex
      p="4"
      bg="gray.800"
      borderRadius="lg"
      minH={counterSize.minH}
      w="100%"
      maxW={656}
      {...props}
    >
      {rightSide && rightSide}
      <Stack width="100%" spacing="4" ml={["0", "4"]} overflow="hidden" px="4">
        {children}
      </Stack>
      {leftSide && leftSide}
    </Flex>
  );
}