import { GetStaticPaths, GetStaticProps } from "next"
import { Flex, Stack } from "@chakra-ui/react";
import { Post } from "../../components/organisms/post";
import { MainContainer } from "../../components/atoms/main-container";
import { PostAdDto, PostDto, PostTagDto } from "../../services/api/openapi";
import { Footer } from "../../components/organisms/footer";
import { PostHead as Head } from "../../components/atoms/post-head";
import { Api } from "../../services/api";
import { Comments } from "../../components/templates/comments";
import { useEffect, useMemo, useState } from "react";
import { useContent } from "../../states/hooks/use-content";
import { PageUpButton } from "../../components/molecules/page-up-button";
import { Cookie } from "../../components/molecules/cookie";
import { Advertisements } from "../../components/templates/advertisements";

interface PostDetailProps {
  post: PostDto;
  tags: PostTagDto[];
}

export default function FeedPost({ post, tags }: PostDetailProps) {
  const [ads, setAds] = useState<PostAdDto[]>([]);
  const { setPostComments } = useContent();

  useEffect(() => {
    setPostComments(post.comments);
    const apiClient = new Api("FeedPost:useEffect");
    apiClient.getPostAds(post.id).then(setAds);
  }, [post, setPostComments]);


  const containerProps = useMemo(() => {
    return { 
      borderBottomRadius: post?.comments.length ? 0 : "lg", 
      maxWidth: "772px",
      backgroundColor: "gray.900"
    }
  }, [post]);

  return (
    <>
      <Head data={post}/>
      <Flex direction="column">
        <MainContainer>
          <Stack spacing="0" flex="1" minW="320px" alignItems="center" mb="6">
            <Post data={post} containerProps={containerProps}/>
            <Advertisements data={ads} />
            <Comments commentContainerProps={{ bg: "gray.900" }}/>
            <Cookie/>
          </Stack>
        </MainContainer> 
        <Footer data={tags}/>
        <PageUpButton direction="up"/>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apiClient = new Api("FeedPost::getServerSideProps");
  const { slug } = params as Record<string, string>;
  const { post, tags } = await apiClient.getPostsAndTagsBySlug(slug); 
  console.log(post.title)
  return { revalidate: 30 * 60, props: { post, tags } }
}