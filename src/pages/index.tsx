import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/organisms/Header";
import Post from "../components/organisms/Post";
import Sidebar from "../components/organisms/Sidebar";
import { api } from "../services/api";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(({ data }) => setPosts(data));
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header/>
      <Flex my="6" w="100%" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          {posts.map((post, i) => <Post key={i} {...post} />)}
        </SimpleGrid>
        <Flex w="64" justify="flex-end" ml="8">
          Empty
        </Flex>
      </Flex> 
    </Flex>
  );
}

