import { GetServerSideProps } from "next"
import { Box, Flex, Stack } from "@chakra-ui/react";
import { Header } from "../components/organisms/Header";
import { TPostComment, TPost } from "../components/organisms/post/post.type";
import { Sidebar } from "../components/organisms/Sidebar";
import api from '../../api.json';
import { PostComment } from "../components/organisms/post/post-comment";
import { Post } from "../components/organisms/post";
import { useCallback, useState } from "react";
import { PostHead } from "../components/organisms/PostHead";

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
        <Flex my="6" w="100%" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <Stack spacing="0" flex="1" minW="320px" alignItems="flex-start" overflow="scroll">
            <Post data={post} containerProps={{ borderBottomRadius: 0 }} commentHandler={commentHandler} />
            <Box w="100%">
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
            </Box>
          </Stack>
          <Flex w="64" justify="flex-end" ml="8">
          </Flex> 
        </Flex> 
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