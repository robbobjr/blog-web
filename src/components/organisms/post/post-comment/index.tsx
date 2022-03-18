import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { PostContainer } from "../../../molecules/containers/post-container";
import { PostCommentProps } from "./post-comment.type";

export function PostComment({ user, comment, containerProps }: PostCommentProps) {
  return (
    <PostContainer size="sm" {...containerProps}>
      <Flex>
        <Box>
          <Avatar name={user.name} src={user.image} size="sm"/>
        </Box>
        <Box ml="4">
          <Text color="gray.600" mt="1" fontSize="sm">{user.name}</Text>
          <Text fontSize="sm" mt="1" opacity={0.7}>{comment}</Text>
        </Box>
      </Flex>
    </PostContainer>
  );
}