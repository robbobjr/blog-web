import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { RatesService } from "../../../../services/api/openapi";
import { useAuth } from "../../../../states/hooks/use-auth";
import { PostContainer } from "../../../molecules/containers/post-container";
import { PostRateControls } from "../../../molecules/controls/post-rate-controls";
import { PostCommentProps } from "./post-comment.type";

export function PostComment({ 
  containerProps,
  data: {
    user,
    content,
    id,
  }
}: PostCommentProps) {
  const session = useAuth();

  const handleCommentRate = useCallback(async (value: number) => {
    return RatesService.postRatesControllerCreateCommentRate({
      commentId: id,
      userId: session.data?.user?.id,
      value,
    });
  }, [id, session]);

  const Aside = useMemo(() => 
    <PostRateControls 
      data={{ commentId: id }} 
      handleRate={handleCommentRate} 
      isDislikeEnabled
      isBorderLeft
      size="sm"
    />
  ,[id, handleCommentRate]);

  return (
    <PostContainer size="sm" {...containerProps} leftSide={Aside}>
      <Flex>
        <Box>
          <Avatar name={user?.name} src={user?.image} size="sm"/>
        </Box>
        <Box ml="4">
          <Text color="gray.600" mt="1" fontSize="sm">{user?.name}</Text>
          <Text fontSize="sm" mt="1" opacity={0.7}>{content}</Text>
        </Box>
      </Flex>
    </PostContainer>
  );
}