import { Flex } from "@chakra-ui/react";
import { MainContainer } from "../components/atoms/main-container";
import { GetStaticProps } from "next";
import { Footer } from "../components/organisms/footer";
import { FeedHead as Head } from "../components/atoms/feed-head";
import { PostDto, PostTagDto } from "../services/api/openapi";
import { Api } from "../services/api";
import { Aside } from "../components/organisms/aside";
import { Posts } from "../components/templates/posts";
import { CreatePostButton } from "../components/molecules/create-post-button";
import { ProfileMenu } from "../components/organisms/profile-menu";

type FeedProps = {
  posts: PostDto[];
  tags: PostTagDto[];
}

export default function Feed({ posts, tags }: FeedProps) {
  return (
    <>
      <Head />
      <Flex direction="column"  w="100vw"> 
        <MainContainer>
          <ProfileMenu/>
          <Aside data={tags}/>
          <Posts data={posts} />
        </MainContainer> 
        <Footer data={tags}/>
        <CreatePostButton/>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apiClient = new Api("Feed::getServerSideProps");
  const { posts, tags } = await apiClient.getPostsAndTags({});
  return { revalidate: 30 * 60, props: { posts, tags } };
};