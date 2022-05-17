import { Flex } from "@chakra-ui/react";
import { MainContainer } from "../components/molecules/containers/main-container";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { Header } from "../components/organisms/header";
import { Footer } from "../components/organisms/footer";
import { useContent } from "../states/hooks/use-content";
import { FeedHead as Head } from "../components/organisms/head/feed-head";
import { PostDto } from "../services/api/openapi";
import { Api } from "../services/api";
import { Aside } from "../components/organisms/aside";
import { Posts } from "../components/templates/posts";

export default function Feed({ 
  posts, 
}: { posts: PostDto[] }) {
  const { setPostsToList } = useContent();
  
  useEffect(() => {
    setPostsToList(posts);
  }, [setPostsToList, posts]);

  return (
    <>
      <Head />
      <Flex direction="column" h="100vh"> 
        <Header />
        <MainContainer>
          <Aside />
          <Posts />
        </MainContainer> 
        <Footer />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apiClient = new Api("Feed::getServerSideProps");
  const posts = await apiClient.getPosts({});
  return { revalidate: 30 * 60, props: { posts } };
};