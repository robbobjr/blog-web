import { Badge, Flex, Stack, useToast } from "@chakra-ui/react";
import { PostIcon } from "../../atoms/post-icon";
import { SingleInputModal } from "../single-input-modal";
import { RiMessage3Fill } from 'react-icons/ri';
import { FormEvent, useCallback, useMemo } from "react";
import { PostFooterProps } from "./post-footer.types";
import { formatCommentText } from "../../../utils/format-text";
import { useAuth } from "../../../states/hooks/use-auth";
import { useContent } from "../../../states/hooks/use-content";
import { CommentsService } from "../../../services/api/openapi";
import { logger } from "../../../services/logger";
import { createCommentErrorToast, createCommentToast } from "../../../utils/toast";
import { dracula } from "../../../styles/theme";
import { Link } from "../../atoms/link";

export function PostFooter({
  data: { commentsLength, tags, id }
}: PostFooterProps) {
  const toast = useToast();
  const { data } = useAuth();
  const user = useMemo(() => data?.user, [data]);
  const { handleUpdatePostComments } = useContent();

  const handlePostComment = useCallback(
    async (event: FormEvent<HTMLElement>) => {
      const content = event.target['content'].value;
      const commentDto = { content, postId: id, userId: user?.id };

      try {
        const comment = await CommentsService.postCommentsControllerCreate(commentDto);
        handleUpdatePostComments({ ...comment, user, rates: [] });
        toast(createCommentToast)
      } catch (error) {
        logger.error({ error, context: "PostFooter::commentHandler" });
        toast(createCommentErrorToast);
      }
    }, [handleUpdatePostComments, id, toast, user],
  );

  return (
    <>
      <Flex align="center">
        <SingleInputModal
          handler={handlePostComment} 
          modalName="comment-modal" 
          textAreaProps={{ placeHolder: "Your comment here"}}
        >
          <PostIcon 
            icon={RiMessage3Fill} 
            text={formatCommentText(commentsLength)}
          />
        </SingleInputModal>
      </Flex>
      <Stack
        display="block"
        float="none"
        direction='row'
        {...(!tags.length && { display: 'none' })}
      >
        {tags?.map(tag => 
          <Link href={"/" + tag.name} key={tag.name}>
            <Badge
              cursor="pointer"
              background={dracula.Pink}>{tag.name}
            </Badge>
          </Link>
        )}
      </Stack>
    </>
  );
}