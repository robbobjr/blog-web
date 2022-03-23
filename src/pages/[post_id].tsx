import { GetServerSideProps } from "next"
import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "../components/organisms/Header";
import { TPostComment, TPost } from "../components/organisms/post/post.type";
import api from '../../api.json';
import { PostComment } from "../components/organisms/post/post-comment";
import { Post } from "../components/organisms/post";
import { useCallback, useState } from "react";
import { PostHead } from "../components/organisms/PostHead";
import { MainContainer } from "../components/molecules/containers/main-container";

interface PostDetailProps {
  post: TPost;
}

export default function FeedPost({ post }: PostDetailProps) {
  const [comments, setComments] = useState(post?.comments || []);

  const commentHandler = useCallback((data: TPostComment) => {
    setComments(state => [...state, data]);
  }, []);

  if (!post) return <></>;

  return (
    <>
      <PostHead post={post}/>
      <Flex direction="column" h="100vh">
        <Header/>
        <MainContainer>
          <Stack spacing="0" flex="1" minW="320px" alignItems="center" mb="6">
            <Post data={post} containerProps={{ borderBottomRadius: 0 }} commentHandler={commentHandler} />
            <Flex direction="column" align="center" w="100%">
              {comments.map(({comment, user}, i, a) => (
                <PostComment 
                  comment={comment} 
                  user={user} 
                  key={i} 
                  containerProps={{ 
                    borderBottomRadius: i === a.length - 1 ? 8 : 0, 
                    borderTopRadius: 0,
                  }} 
                />
              ))}
            </Flex>
          </Stack>
        </MainContainer> 
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { post_id } = params;

  const post = api.posts.find(({ id }) => id == post_id) || null;
  
  return {
    props: {
      post,
    }
  }
}