import { Flex, useToast } from "@chakra-ui/react";
import { PostIcon } from "../../../atoms/icons/post-icon";
import { SingleInputModal } from "../../modals/single-input-modal";
import { RiMessage3Fill } from 'react-icons/ri';
import { FormEvent, useCallback, useMemo } from "react";
import { PostFooterProps } from "./post-footer.types";
import { formatCommentText } from "../../../utils/format-text";
import { useAuth } from "../../../../states/hooks/use-auth";
import { useContent } from "../../../../states/hooks/use-content";
import { CommentsService, CreateCommentDto } from "../../../../services/api/openapi";
import { logger } from "../../../../services/logger";
import { createCommentErrorToast } from "../../../../utils/toast";

export function PostFooter({
  data: { postId }
}: PostFooterProps) {
  const toast = useToast();
  const { data } = useAuth();
  const user = useMemo(() => data?.user, [data]);
  const { commentByPost, handleUpdatePostComments } = useContent();

  const commentHandler = useCallback(async (data: CreateCommentDto) => {
    try {
      console.log(data);
      const comment = await CommentsService.postCommentsControllerCreate(data);
      handleUpdatePostComments({ ...comment, user });
    } catch (error) {
      logger.error({ error, context: "PostFooter::commentHandler" });
      toast(createCommentErrorToast);
    }
  }, [handleUpdatePostComments, toast, user]);

  const handlePostComment = useCallback(
    async (event: FormEvent<HTMLElement>) => {
      const content = event.target['content'].value;
      return commentHandler({ content, postId, userId: user?.id });
    }, [commentHandler, postId, user?.id],
  );

  return (
    <Flex align="center">
      <Flex align="center">
        <SingleInputModal
          handler={handlePostComment} 
          modalName="comment-modal" 
          textAreaProps={{ placeHolder: "Digite seu comentário."}}
        >
          <PostIcon 
            icon={RiMessage3Fill} 
            text={formatCommentText(commentByPost.get(postId)?.length)}
          />
        </SingleInputModal>
      </Flex>
    </Flex>
  );
}