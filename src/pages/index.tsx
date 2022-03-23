import { Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/organisms/Header";
import { Post } from "../components/organisms/post";
import { Sidebar } from "../components/organisms/Sidebar";
import { api } from "../services/api";
import Head from 'next/head';
import { adsenseConfigs } from "../configs/adsense";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(({ data }) => setPosts(data));
  }, []);

  return (
    <>
    <Head>
      <title>Feed | Social-dev</title>
      <script async src={adsenseConfigs.script} crossOrigin="anonymous"></script>
    </Head>
      <Flex direction="column" h="100vh">
        <Header/>
        <Flex my="6" w="100%" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <Stack spacing="4" flex="1" minW="320px" alignItems="flex-start" overflow="scroll">
            {posts.map((post, i) => <Post key={i} data={post} isPostPreview/>)}
          </Stack>
          <Flex w="64" justify="flex-end" ml="8">
          </Flex> 
        </Flex> 
      </Flex>
    </>
  );
}

