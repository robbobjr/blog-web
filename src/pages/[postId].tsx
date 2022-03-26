import { GetServerSideProps } from "next"
import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "../components/organisms/Header";
import api from '../../api.json';
import { PostComment } from "../components/organisms/post/post-comment";
import { Post } from "../components/organisms/post";
import { useCallback, useState } from "react";
import { MainContainer } from "../components/molecules/containers/main-container";
import { PostHead } from "../components/molecules/heads/PostHead";
import { CommentDto, PostDto } from "../services/openapi";

interface PostDetailProps {
  post: PostDto;
}

export default function FeedPost({ post }: PostDetailProps) {
  const [comments, setComments] = useState(post?.comments || []);

  const commentHandler = useCallback((data: CommentDto) => {
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
              {comments.map(({ content, user }, i, a) => (
                <PostComment 
                  comment={content} 
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
  const { postId } = params;

  const post = api.posts.find(({ id }) => id == postId) || null;
  
  return {
    props: {
      post,
    }
  }
}