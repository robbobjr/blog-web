import { Flex, Input, useToast } from "@chakra-ui/react";
import { Icon } from "../../icons";
import { RiSearch2Line } from 'react-icons/ri';
import { ChangeEvent, useCallback } from "react";
import { debounce } from "../../../../utils/debounce";
import { useContent } from "../../../../states/hooks/use-content";
import { logger } from "../../../../services/logger";
import { searchPostErrorToast } from "../../../../utils/toast";
import { AxiosAPI } from "../../../../services/api/axios";
import { useRouter } from "next/router";

export function SearchInput() {
  const { setPosts } = useContent();
  const toast = useToast();
  const history = useRouter();

  const handlePostsSearch = useCallback(async (input: string) => {
    try {
      const client = new AxiosAPI("SearchInput");
      const foundPosts = await client.getPosts(input ? { input } : undefined);
      setPosts(foundPosts);
      if (history.pathname !== "/") return history.push("/");
    } catch (error) {
      logger.error({ error, context: "SearchInput" });
      toast(searchPostErrorToast);
    }
  }, [history, setPosts, toast]);
  
  const handleInputChange = useCallback(async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.target.value;
    debounce(500, () =>
      handlePostsSearch(input)
    );
  }, [handlePostsSearch]);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxWidth={400}
      alignSelf="center"
      color="gray.600"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      display={{ base: "none", sm: 'none', md: 'flex' }}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar post"
        onChange={handleInputChange}
        mx="4"
        _placeholder={{
          color: 'gray.600'
        }} 
        size="sm"
      />
      <Icon as={RiSearch2Line} fontSize="20" />
    </Flex>
  );
}