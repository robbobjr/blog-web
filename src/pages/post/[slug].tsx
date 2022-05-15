import { GetStaticPaths, GetStaticProps } from "next"
import { Flex, Stack, useToast } from "@chakra-ui/react";
import { Post } from "../../components/organisms/post";
import { MainContainer } from "../../components/molecules/containers/main-container";
import { PostDto } from "../../services/api/openapi";
import { Header } from "../../components/organisms/header";
import { useContent } from "../../states/hooks/use-content";
import { Footer } from "../../components/organisms/footer";
import { PostHead } from "../../components/organisms/head/post-head";
import { AxiosAPI } from "../../services/api/axios";
import { Comments } from "../../components/templates/comments";
import { useEffect, useMemo } from "react";

interface PostDetailProps {
  post: PostDto;
}

export default function FeedPost({ post }: PostDetailProps) {
  const { commentByPost, setPosts } = useContent();

  useEffect(() => setPosts([post]), [post, setPosts]);

  const containerProps = useMemo(() => {
    return { 
      borderBottomRadius: commentByPost.get(post.id)?.length ? 0 : "lg", 
      maxWidth: "772px",
      paddingTop: "2rem" 
    }
  }, [commentByPost, post.id]);

  return (
    <>
      <PostHead data={post}/>
      <Flex direction="column" h="100vh">
        <Header />
        <MainContainer>
          <Stack spacing="0" flex="1" minW="320px" alignItems="center" mb="6">
            <Post 
              data={post} 
              containerProps={containerProps} 
            />
           <Comments data={{ postId: post.id }} />
          </Stack>
        </MainContainer> 
        <Footer/>
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
    revalidate: 60 * 60,
    props: {
      post,
    }
  }
}