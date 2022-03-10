import { Avatar, Box, Button, Flex, Icon, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { FaHandshake, FaSignInAlt } from 'react-icons/fa';
import { RiMessage3Fill, RiTeamFill } from 'react-icons/ri';
import { simpleHover } from "../../styles/theme";
import PostIcon from "../atoms/PostIcon";

export default function Post({ 
  participation, 
  comments, 
  joiners, 
  positions, 
  user, 
  title, 
  content 
}) {
  const [postVotes, setPostVotes] = useState(100);

  const handlePostVote = useCallback(async () => {
    setPostVotes(state => state + 1);
  }, []);

  const handlePostUndoVote = useCallback(async () => {
    setPostVotes(state => state - 1);
  }, []);

  const commentsText = useMemo(() => {
    const commentsLength = comments.length;

    if (commentsLength > 1) return `${commentsLength} Comentários`

    return commentsLength === 1 ? `${commentsLength} Comentário` : `Comentar`
  }, [comments]);

  return (
    <Flex p="4" bg="gray.800" borderRadius={8} minH="32" w="100%">
      <Stack 
        spacing="2"
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
          fontSize={28} 
          color="gray.600" 
          _hover={simpleHover}
          onClick={handlePostVote}
        />
        <Text fontWeight="medium" color="pink.400">
          {postVotes}
        </Text>
        <Icon 
          as={AiOutlineCaretDown} 
          fontSize={28} 
          color="gray.600" 
          _hover={simpleHover}
          onClick={handlePostUndoVote}
        />
      </Stack>
      <Stack spacing="4" ml="4" overflow="hidden" px="4">
        <Flex align="center">
          <Avatar size="xs" name={user.name} src={user.avatar}/>
          <Text fontSize="smaller" color="gray.600" ml="2">
            Enviado por {user.name}
          </Text>
          <Flex ml="auto">
            {participation && (
              <PostIcon icon={FaHandshake} text={`Participação ofertada: ${participation}%`}/>
            )}
          </Flex>
        </Flex>
        <Text fontSize="lg" mb="4" isTruncated> 
          {title}
        </Text>
        <Text fontSize="sm" opacity={0.7} bgGradient="linear(to-b, gray.50, transparent)" bgClip="text">
          {content}
        </Text>
        <Flex align="center">
          <Flex align="center">
            <PostIcon icon={FaSignInAlt} text={"Unir-se"}/>
            <PostIcon icon={RiMessage3Fill} text={commentsText}/>
          </Flex>
          <Flex align="center" ml="auto">
            <PostIcon icon={RiTeamFill} text={`Vagas: ${joiners}/${positions}`}/>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}