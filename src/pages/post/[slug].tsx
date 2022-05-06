import { GetStaticPaths, GetStaticProps } from "next"
import { Flex, Stack, useToast } from "@chakra-ui/react";
import { PostComment } from "../../components/organisms/post/post-comment";
import { Post } from "../../components/organisms/post";
import { useCallback, useState } from "react";
import { MainContainer } from "../../components/molecules/containers/main-container";
import { CreateCommentDto, PostDto, PostsService } from "../../services/api/openapi";
import { logger } from "../../services/logger";
import { createCommentErrorToast } from "../../utils/toast";
import { Header } from "../../components/organisms/header";
import { useContent } from "../../states/hooks/use-content";
import { Footer } from "../../components/organisms/footer";
import { PostHead } from "../../components/organisms/head/post-head";
import { AxiosAPI } from "../../services/api/axios";
import { useAuth } from "../../states/hooks/use-auth";

interface PostDetailProps {
  post: PostDto;
}

export default function FeedPost({ post }: PostDetailProps) {
  const [comments, setComments] = useState(post?.comments || []);
  const { tags } = useContent();
  const toast = useToast();
  const session = useAuth();

  const commentHandler = useCallback(async (data: CreateCommentDto) => {
    try {
      const comment = await PostsService.postsControllerCreateComment(data);
      comment.user = session.data.user;
      setComments(state => [...state, comment]);
    } catch (error) {
      logger.error({ error, context: "FeedPost" });
      toast(createCommentErrorToast);
    }
  }, [toast, session]);

  if (!post) return <></>;

  return (
    <>
      <PostHead data={post}/>
      <Flex direction="column" h="100vh">
        <Header/>
        <MainContainer>
          <Stack spacing="0" flex="1" minW="320px" alignItems="center" mb="6">
            <Post 
              data={post} 
              commentHandler={commentHandler}
              containerProps={{ 
                borderBottomRadius: comments.length ? 0 : "lg", 
                maxWidth: "772px",
                paddingTop: "2rem" 
              }} 
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
        <Footer data={{ tags }}/>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const axiosAPI = new AxiosAPI("FeedPost:getServerSideProps");
  const { slug } = params as Record<string, string>;
  const post = await axiosAPI.getPostsBySlug(slug); 
  
  return {
    revalidate: 24 * 60 * 60,
    props: {
      post,
    }
  }
}