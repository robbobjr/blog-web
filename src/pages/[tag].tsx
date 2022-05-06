import { Box, Flex, Stack, useToast } from "@chakra-ui/react";
import { Post } from "../components/organisms/post";
import { MainContainer } from "../components/molecules/containers/main-container";
import { GetStaticPaths, GetStaticProps } from "next";
import { dracula } from "../styles/theme";
import { Topics } from "../components/organisms/topics";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { logger } from "../services/logger";
import { createCommentErrorToast, searchPostErrorToast } from "../utils/toast";
import { Header } from "../components/organisms/header";
import { Footer } from "../components/organisms/footer";
import { useContent } from "../states/hooks/use-content";
import { FeedHead } from "../components/organisms/head/feed-head";
import { CreateCommentDto, PostDto, PostsService, PostTagDto } from "../services/api/openapi";
import { AxiosAPI } from "../services/api/axios";

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
  const [postsState, setPostsState] = useState(posts);
  const history = useRouter();
  const toast = useToast();
  const { setTags } = useContent();
  
  useEffect(() => {
    setTags(tags);
  }, [setTags, tags]);

  const commentHandler = useCallback(async (data: CreateCommentDto) => {
    try {
      await PostsService.postsControllerCreateComment(data);
      history.push('/')
    } catch (error) {
      logger.error({ error, context: "Feed" });
      toast(createCommentErrorToast);
    }
  }, [history, toast]);

  const handlePostsSearch = useCallback(async (input: string) => {
    try {
      if (!input) {
        return setPostsState(posts)
      }

      const client = new AxiosAPI("Feed:HandlePostsSearch");
      const foundPosts = await client.getPosts({ input });
      setPostsState(foundPosts);
    } catch (error) {
      logger.error({ error, context: "Feed" });
      toast(searchPostErrorToast);
    }
  }, [toast, posts]);

  return (
    <>
      <FeedHead />
      <Flex direction="column" h="100vh"> 
        <Header handleInput={handlePostsSearch}/>
        <MainContainer>
          <Box position="absolute" display={{ base: "none", sm: "none", md: "block" }}>
            <Topics textAlign="left" tags={tags} maxW="200px" display={{ sm: "none", lg: "block"}}/>
          </Box>
          <Stack spacing="4" flex="1" minW="320px" alignItems="center" mb="6">
            {postsState.map((post, i) => (
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
        <Footer data={{ tags }} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { tag: 'ptbr' } }
    ],
    fallback: 'blocking',
  }
}


export const getStaticProps: GetStaticProps = async ({ params: { tag } }) => {
  const axiosAPI = new AxiosAPI("Feed:getServerSideProps");
  const { posts, tags } = await axiosAPI.getPostsAndTags({ tag });

  return {
    revalidate: 24 * 60 * 60,
    props: {
      posts,
      tags,
    }
  }
};