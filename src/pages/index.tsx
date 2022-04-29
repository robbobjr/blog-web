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
import { Header } from "../components/organisms/header";

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
      console.error(error);
      alert('Error!')
    }
  }, [history]);

  return (
    <>
      <FeedHead />
      <Flex direction="column" h="100vh"> 
        <Header/>
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
  const fail = () => [];
  const { tag } = query as Record<string, string>;
  const posts = await PostsService.postsControllerFindAll(tag).catch(fail);
  const tags = await PostsService.postsControllerFindAllPostTags().catch(fail);
  tags.push(...["Ola", "Adeus mundo cruel", "Sociedade"].map(t => ({ name: t }) as PostTagDto))

  return {
    props: {
      posts,
      tags,
    }
  }
};