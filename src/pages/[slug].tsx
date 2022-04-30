import { GetServerSideProps } from "next"
import { Flex, Stack } from "@chakra-ui/react";
import { PostComment } from "../components/organisms/post/post-comment";
import { Post } from "../components/organisms/post";
import { useCallback, useState } from "react";
import { MainContainer } from "../components/molecules/containers/main-container";
import { PostHead } from "../components/organisms/heads/post-head";
import { CreateCommentDto, PostDto, PostsService } from "../services/openapi";
import { AdminHeader } from "../components/organisms/admin-header";
import { logger } from "../services/logger";

interface PostDetailProps {
  post: PostDto;
}

export default function FeedPost({ post }: PostDetailProps) {
  const [comments, setComments] = useState(post?.comments || []);

  const commentHandler = useCallback(async (data: CreateCommentDto) => {
    try {
      const comment = await PostsService.postsControllerCreateComment(data);
      setComments(state => [...state, comment]);
    } catch (error) {
      logger.error({ error, context: "FeedPost" });
      alert('Error!');
    }
  }, []);

  if (!post) return <></>;

  return (
    <>
      <PostHead data={post}/>
      <Flex direction="column" h="100vh">
        <AdminHeader/>
        <MainContainer>
          <Stack spacing="0" flex="1" minW="320px" alignItems="center" mb="6">
            <Post 
              data={post} 
              containerProps={{ 
                borderBottomRadius: comments.length ? 0 : "lg", 
                maxWidth: "772px",
                paddingTop: "2rem" 
              }} 
              commentHandler={commentHandler}
            />
            <Flex direction="column" align="center" w="100%">
              {comments.map((comment, i, a) => (
                <PostComment 
                  key={i} 
                  data={comment} 
                  containerProps={{ 
                    borderBottomRadius: i === a.length - 1 ? 8 : 0, 
                    borderTopRadius: 0,
                    maxWidth: "772px",
                  }} 
                />
              ))}
            </Flex>
          </Stack>
        </MainContainer> 
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as Record<string, string>;
  
  const fail = (error) => {
    logger.error({ error, context: "SSR:FeedPost" });
    return null;
  };

  const post = await PostsService.postsControllerFindOne(slug).catch(fail);
  
  return {
    props: {
      post,
    }
  }
}