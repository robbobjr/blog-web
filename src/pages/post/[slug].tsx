import { GetStaticPaths, GetStaticProps } from "next"
import { Flex, Stack } from "@chakra-ui/react";
import { Post } from "../../components/organisms/post";
import { MainContainer } from "../../components/atoms/main-container";
import { PostDto } from "../../services/api/openapi";
import { Header } from "../../components/organisms/header";
import { Footer } from "../../components/organisms/footer";
import { PostHead as Head } from "../../components/atoms/post-head";
import { Api } from "../../services/api";
import { Comments } from "../../components/templates/comments";
import { useEffect, useMemo } from "react";
import { useContent } from "../../states/hooks/use-content";

interface PostDetailProps {
  post: PostDto;
}

export default function FeedPost({ post }: PostDetailProps) {
  const { setPostComments } = useContent();

  useEffect(() => {
    setPostComments(post.comments);
  }, [post, setPostComments]);

  const containerProps = useMemo(() => {
    return { 
      borderBottomRadius: post.comments.length ? 0 : "lg", 
      maxWidth: "772px",
      paddingTop: "2rem" 
    }
  }, [post]);

  return (
    <>
      <Head data={post}/>
      <Flex direction="column" h="100vh">
        <Header />
        <MainContainer>
          <Stack spacing="0" flex="1" minW="320px" alignItems="center" mb="6">
            <Post data={post} containerProps={containerProps}/>
            <Comments />
          </Stack>
        </MainContainer> 
        <Footer/>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apiClient = new Api("FeedPost:getServerSideProps");
  const { slug } = params as Record<string, string>;
  const post = await apiClient.getPostsBySlug(slug); 
  return { revalidate: 30 * 60, props: { post } }
}