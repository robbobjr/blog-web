import { Flex } from "@chakra-ui/react";
import { MainContainer } from "../components/molecules/containers/main-container";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { Header } from "../components/organisms/header";
import { Footer } from "../components/organisms/footer";
import { useContent } from "../states/hooks/use-content";
import { FeedHead as Head } from "../components/organisms/head/feed-head";
import { PostDto, PostTagDto } from "../services/api/openapi";
import { AxiosAPI } from "../services/api/axios";
import { Aside } from "../components/organisms/aside";
import { Posts } from "../components/templates/posts";

export default function Feed({ 
  posts, 
  tags 
}: { posts: PostDto[], tags: PostTagDto[]}) {
  const { setTags, setPosts } = useContent();
  
  useEffect(() => {
    setTags(tags);
    setPosts(posts);
  }, [setTags, setPosts, tags, posts]);

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
  const axiosAPI = new AxiosAPI("Feed::getServerSideProps");
  const { posts, tags } = await axiosAPI.getPostsAndTags({});
  return { revalidate: 60 * 60, props: { posts, tags } };
};