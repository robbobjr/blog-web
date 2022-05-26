import { Avatar, Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { CommentsService, RatesService, UserDto } from "../../../services/api/openapi";
import { logger } from "../../../services/logger";
import { useAuth } from "../../../states/hooks/use-auth";
import { useContent } from "../../../states/hooks/use-content";
import { commentDeleted, deleteCommentErrorToast } from "../../../utils/toast";
import { PostIcon } from "../../atoms/icons/post-icon";
import { PostContainer } from "../../atoms/containers/post-container";
import { PostRateControls } from "../../molecules/controls/post-rate-controls";
import { Alert } from "../alert";
import { PostCommentProps } from "./post-comment.type";

export function PostComment({ 
  containerProps,
  data: { user, content, id, rates }
}: PostCommentProps) {
  const session = useAuth();
  const toast = useToast();
  const loggedUser = useMemo(() => session?.data?.user, [session]);
  const { handleDeletePostComment } = useContent();

  const handleDeleteComment = useCallback(async () => {
    try {
      await CommentsService.postCommentsControllerDelete(`${id}`);
      handleDeletePostComment(id);
      toast(commentDeleted);
    } catch (error) {
      logger.error({ error, context: 'PostComment::handleDeleteComment' });
      toast(deleteCommentErrorToast);
    }
  }, [id, toast, handleDeletePostComment]);
  
  const handleCommentRate = useCallback(async (value: number) => {
    return RatesService.postRatesControllerCreateCommentRate({
      commentId: id,
      userId: session.data?.user?.id,
      value,
    });
  }, [id, session]);

  const LeftSide = useMemo(() => 
    <PostRateControls 
      data={{ rates }} 
      handleRate={handleCommentRate} 
      isDislikeEnabled
      controllSide="right"
      size="sm"
    />
  ,[rates, handleCommentRate]);

  const RightSide = useMemo(() => 
    loggedUser?.id === user?.id || loggedUser?.role === UserDto.role.ADMIN ?
    <Alert 
      title="Deletar comentário" 
      description="Você deseja deletar este comentário?"
      handler={handleDeleteComment}
    >
      <PostIcon mr="0" mt="2" mb="auto" icon={GrMoreVertical}/>
    </Alert>
    : <></>
  ,[handleDeleteComment, loggedUser?.id, loggedUser?.role, user?.id]);

  // TODO: Refactor into small pieces
  return (
    <PostContainer
      rightSide={RightSide}
      size="sm"
      {...containerProps}
      leftSide={LeftSide}
    >
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