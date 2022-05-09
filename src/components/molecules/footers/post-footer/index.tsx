import { Flex } from "@chakra-ui/react";
import { PostIcon } from "../../../atoms/icons/post-icon";
import { SingleInputModal } from "../../modals/single-input-modal";
import { FaSignInAlt } from 'react-icons/fa';
import { RiMessage3Fill, RiTeamFill } from 'react-icons/ri';
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { PostFooterProps } from "./post-footer.types";
import { formatCommentText } from "../../../utils/format-text";
import { useAuth } from "../../../../states/hooks/use-auth";
import { logger } from "../../../../services/logger";
import { CommentsService } from "../../../../services/api/openapi";

export function PostFooter({
  commentHandler,
  data: {
    id,
    candidatures,
    availlablePositions,
  }
}: PostFooterProps) {
  const { data } = useAuth();
  const user = useMemo(() => data?.user, [data]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    CommentsService.postsControllerFindAllComment(
      `${id}`,
    ).then(data => setComments(data));
  },[id]);  

  const handlePostJoin = useCallback(
    async (event: FormEvent<HTMLElement>) => {
      const content = event.target['content'].value;
      const dto = { user, postId: id, content }
      logger.info({ payload: dto, context: "handlePostJoin" });
    }, [user, id],
  );

  const handlePostComment = useCallback(
    async (event: FormEvent<HTMLElement>) => {
      const content = event.target['content'].value;
      if (!commentHandler) return; 
      return commentHandler({
        content,
        postId: id,
        userId: user?.id,
      });
    }, [commentHandler, user, id],
  );

  return (
    <Flex align="center">
      <Flex align="center">
        {availlablePositions && (
          <SingleInputModal 
            handler={handlePostJoin} 
            modalName="join-modal" 
            textAreaProps={{
              placeHolder: "Sou um programador com 3 anos de..."
            }}
          >
            <PostIcon icon={FaSignInAlt} text={"Unir-se"} />
          </SingleInputModal>
        )}
        <SingleInputModal
          handler={handlePostComment} 
          modalName="comment-modal" 
          textAreaProps={{
            placeHolder: "Digite seu comentário."
          }}
        >
          <PostIcon 
            icon={RiMessage3Fill} 
            text={formatCommentText(comments.length)}
          />
        </SingleInputModal>
      </Flex>
      <Flex align="center" ml="auto">
      {availlablePositions && (
        <PostIcon
          icon={RiTeamFill}
          text={`Vagas: ${candidatures.length}/${availlablePositions}`} 
        />
      )}
      </Flex>
    </Flex>
  );
}