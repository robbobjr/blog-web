import { Box, Flex, Stack, useToast } from "@chakra-ui/react";
import { Post } from "../components/organisms/post";
import { MainContainer } from "../components/molecules/containers/main-container";
import { GetStaticProps } from "next";
import { dracula } from "../styles/theme";
import { Topics } from "../components/organisms/topics";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { logger } from "../services/logger";
import { createCommentErrorToast } from "../utils/toast";
import { Header } from "../components/organisms/header";
import { Footer } from "../components/organisms/footer";
import { useContent } from "../states/hooks/use-content";
import { FeedHead } from "../components/organisms/head/feed-head";
import { CommentsService, CreateCommentDto, PostDto, PostTagDto } from "../services/api/openapi";
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
  const history = useRouter();
  const toast = useToast();
  const { setTags, setPosts, posts: postsState } = useContent();
  
  useEffect(() => {
    setTags(tags);
    setPosts(posts);
  }, [setTags, setPosts, tags, posts]);

  const commentHandler = useCallback(async (data: CreateCommentDto) => {
    try {
      await CommentsService.postsControllerCreateComment(data);
      history.push('/')
    } catch (error) {
      logger.error({ error, context: "Feed" });
      toast(createCommentErrorToast);
    }
  }, [history, toast]);

  if (!postsState) return <></>;

  return (
    <>
      <FeedHead />
      <Flex direction="column" h="100vh"> 
        <Header />
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

export const getStaticProps: GetStaticProps = async () => {
  const axiosAPI = new AxiosAPI("Feed::getServerSideProps");
  const { posts, tags } = await axiosAPI.getPostsAndTags({});

  return {
    revalidate: 60 * 60,
    props: {
      posts,
      tags,
    }
  }
};