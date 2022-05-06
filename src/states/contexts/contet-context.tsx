import { createContext } from "react";
import { useCallback, useMemo, useState } from "react";
import { AxiosAPI } from "../../services/api/axios";
import { PostDto, PostTagDto } from "../../services/api/openapi";

export interface ContentContextProps {
  tags: PostTagDto[];
  setTags: (tags: PostTagDto[]) => void;
  handleSearchPosts(params: Record<string, string | string[]>): Promise<void>;
  posts: PostDto[];
  setPosts: (data: PostDto[]) => void;
}

export const ContentContext = createContext({} as ContentContextProps);

export function ContentContextProvider({ children }) {
  const [tags, setTags] = useState([] as PostTagDto[]); 
  const [posts, setPosts] = useState((undefined) as PostDto[]);

  const handleSearchPosts = useCallback(
    async (params: Record<string, string | string[]>) => {
      const client = new AxiosAPI("Feed:HandlePostsSearch");
      const foundPosts = await client.getPosts(params);
      setPosts(foundPosts);
  }, []);

  const context = useMemo(() => ({
    handleSearchPosts,
    setPosts,
    setTags,
    posts,
    tags, 
  }), [handleSearchPosts, posts, tags]);

  return (
    <ContentContext.Provider value={context}>
      {children}
    </ContentContext.Provider>
  );
}