import { Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/organisms/Header";
import { Post } from "../components/organisms/post";
import { api } from "../services/api";
import { MainContainer } from "../components/molecules/containers/main-container";
import { FeedHead } from "../components/organisms/head/FeedHead";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(({ data }) => setPosts(data));
  }, []);

  return (
    <>
      <FeedHead />
      <Flex direction="column" h="100vh">
        <Header/>
        <MainContainer>
          <Stack spacing="4" flex="1" minW="320px" alignItems="center" mb="6">
            {posts.map((post, i) => <Post key={i} data={post} isPostPreview/>)}
          </Stack>
        </MainContainer> 
      </Flex>
    </>
  );
}

