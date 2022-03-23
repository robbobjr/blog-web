import {  Flex, FlexProps, Icon, Stack, Text } from "@chakra-ui/react";
import { ReactElement, useCallback, useMemo, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { simpleHover } from "../../../../styles/theme";

interface PostContainerProps extends FlexProps {
  children: ReactElement[] | ReactElement;
  size: 'sm' | 'md';
}

export function PostContainer({ children, size, ...props }: PostContainerProps) {
  const [postVotes, setPostVotes] = useState(100);

  const handlePostVote = useCallback(async () => {
    setPostVotes(state => state + 1);
  }, []);

  const handlePostUndoVote = useCallback(async () => {
    setPostVotes(state => state - 1);
  }, []);

  const counterSize = useMemo(() => {
    const sizeValues = {
      md: {
        iconSize: 28,
        textSize: 'md',
        iconsSpacing: 2,
        minH: 32,
      },
      sm: {
        iconSize: 20,
        textSize: 'sm',
        iconsSpacing: 0.1,
        minH: 24,
      }
    }

    return sizeValues[size];
  }, [size]);

  return (
    <Flex
      p="4"
      bg="gray.800"
      borderRadius={8}
      minH={counterSize.minH}
      w="100%"
      {...props}
    >
      <Stack 
        spacing={counterSize.iconsSpacing}
        borderRightWidth={1} 
        borderRightColor="gray.700" 
        w="20" 
        minW="20"
        borderTopLeftRadius={8} 
        borderBottomLeftRadius={8} 
        align="center" 
        justify="center"
        pr="4"
      >
        <Icon 
          as={AiOutlineCaretUp} 
          fontSize={counterSize.iconSize} 
          color="gray.600" 
          _hover={simpleHover}
          onClick={handlePostVote}
        />
        <Text
          fontSize={counterSize.textSize}
          fontWeight="medium"
          color="pink.400"
        >
          {postVotes}
        </Text>
        <Icon 
          as={AiOutlineCaretDown} 
          fontSize={counterSize.iconSize} 
          color="gray.600" 
          _hover={simpleHover}
          onClick={handlePostUndoVote}
        />
      </Stack>
      <Stack spacing="4" ml="4" overflow="hidden" px="4">
        {children}
      </Stack>
    </Flex>
  );
}