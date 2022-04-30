import { Flex, Stack } from "@chakra-ui/react";
import { Post } from "../components/organisms/post";
import { MainContainer } from "../components/molecules/containers/main-container";
import { FeedHead } from "../components/organisms/heads/feed-head";
import { GetServerSideProps } from "next";
import { CreateCommentDto, PostDto, PostsService, PostTagDto } from "../services/openapi";
import { dracula } from "../styles/theme";
import { Topics } from "../components/organisms/topics";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { AdminHeader } from "../components/organisms/admin-header";
import { logger } from "../services/logger";
import { axiosAPI } from "../services/axios-api";

const containerProps = {
  border: "2px solid transparent",
  transition: "0.2s",
  _hover: {
    transform: 'scale(1.01)',
    border: `2px solid ${dracula.Purple}`,
  }
}

export default function Feed({ 
  posts, 
  tags 
}: { posts: PostDto[], tags: PostTagDto[]}) {
  const history = useRouter();
  
  const commentHandler = useCallback(async (data: CreateCommentDto) => {
    try {
      await PostsService.postsControllerCreateComment(data);
      history.push('/')
    } catch (error) {
      logger.error({ error, context: "Feed" });
      alert('Error!')
    }
  }, [history]);

  return (
    <>
      <FeedHead />
      <Flex direction="column" h="100vh"> 
        <AdminHeader/>
        <MainContainer>
          <Topics tags={tags} position="absolute" maxW="200px" display={{ sm: "none", lg: "block"}}/>
          <Stack spacing="4" flex="1" minW="320px" alignItems="center" mb="6">
            {posts.map((post, i) => (
              <Post 
                key={i} 
                data={post} 
                isPostPreview
                containerProps={containerProps}
                commentHandler={commentHandler}
              />
            ))}
          </Stack>
        </MainContainer> 
        <Topics tags={tags} mx="auto" pb="4" maxW="400px"/>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const fail = (error) => {
    logger.error({ error, context: "SSR:Feed" });
    return { data: [] };
  }

  const { tag } = query as Record<string, string>;
  const [{ data: posts }, { data: tags }] = await Promise.all([
    axiosAPI.get('/posts', { params: {tag} }).catch(fail),
    axiosAPI.get('posts/tags').catch(fail),
  ]);

  return {
    props: {
      posts,
      tags,
    }
  }
};