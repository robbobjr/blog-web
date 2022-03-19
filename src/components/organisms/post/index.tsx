import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { FormEvent, useCallback, useMemo } from "react";
import { FaSignInAlt } from 'react-icons/fa';
import { RiMessage3Fill, RiTeamFill } from 'react-icons/ri';
import { PostIcon } from "../../atoms/icons/post-icon";
import { PostContainer } from "../../molecules/containers/post-container";
import { PostContent } from "../../molecules/contents/post-content";
import { PostHeader } from "../../molecules/headers/post-header";
import { SingleInputModal } from "../../molecules/modals/single-input-modal";
import { PostProps } from "./post.type";

export function Post({ 
  containerProps,
  isPostPreview,
  commentHandler,
  data: postData,
}: PostProps) {
  const { data } = useSession();

  const {
    comments,
    user, 
    participation,
    joiners,
    positions,
    id
  } = useMemo(() => postData, [postData]);

  const handlePostJoin = useCallback(
    async (event: FormEvent<HTMLElement>) => {
      const content = event.target['content'].value;
      const dto = { user: data?.user, postId: id, content }
    }, [data, id],
  );

  const handlePostComment = useCallback(
    async (event: FormEvent<HTMLElement>) => {
      const comment = event.target['content'].value;
      const dto = { user: data?.user,  comment, rate: 0, id: Math.random().toString(10) }
      commentHandler && commentHandler(dto);
    }, [data, commentHandler],
  );

  const commentsText = useMemo(() => {
    const commentsLength = comments.length;
    if (commentsLength > 1) return `${commentsLength} Comentários`
    return commentsLength === 1 ? `${commentsLength} Comentário` : `Comentar`
  }, [comments]);

  return (
    <PostContainer size="md" {...containerProps}>
      <PostHeader user={user} participation={participation} />
      <PostContent isPostPreview={isPostPreview} data={postData}/>
      <Flex align="center">
        <Flex align="center">
          <SingleInputModal 
            handler={handlePostJoin} 
            modalName="join-modal" 
            textAreaProps={{
              placeHolder: "Sou um programador com 3 anos de..."
            }}
          >
            <PostIcon icon={FaSignInAlt} text={"Unir-se"} onClick={() => {}} />
          </SingleInputModal>
          <SingleInputModal
            handler={handlePostComment} 
            modalName="comment-modal" 
            textAreaProps={{
              placeHolder: "Digite seu comentário."
            }}
          >
            <PostIcon icon={RiMessage3Fill} text={commentsText}/>
          </SingleInputModal>
        </Flex>
        <Flex align="center" ml="auto">
          <PostIcon icon={RiTeamFill} text={`Vagas: ${joiners}/${positions}`}/>
        </Flex>
      </Flex>
    </PostContainer>
  );
}