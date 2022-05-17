import { createContext, useEffect } from "react";
import { useCallback, useMemo, useState } from "react";
import { Api } from "../../services/api";
import { CommentDto, PostDto, PostTagDto, TagsService } from "../../services/api/openapi";

export interface ContentContextProps {
  tags: PostTagDto[];
  setTags: (tags: PostTagDto[]) => void;
  handleSearchPosts(params: Record<string, string | string[]>): Promise<void>;
  setPostsToList: (data: PostDto[]) => void;
  postsToList: PostDto[];
  handleUpdatePostComments(data: CommentDto): void;
  postComments: CommentDto[];
  setPostComments: (data: CommentDto[]) => void;
}

export const ContentContext = createContext({} as ContentContextProps);

export function ContentContextProvider({ children }) {
  const [tags, setTags] = useState([] as PostTagDto[]);
  const [postsToList, setPostsToList] = useState([] as PostDto[]);
  const [postComments, setPostComments] = useState<CommentDto[]>([]);

  useEffect(() => {
    TagsService.postsControllerFindAllPostTags().then(tags => setTags(tags));
  }, []);

  const handleSearchPosts = useCallback(
    async (params: Record<string, string | string[]>) => {
      const client = new Api("ContentContext::handleSearchPosts");
      const foundPosts = await client.getPosts(params);
      setPostsToList(foundPosts);
  }, []); 

  const handleUpdatePostComments = useCallback((data: CommentDto) => {
    setPostComments(state => [data, ...state]);
  }, []);

  // TODO: get tags over context
  const context = useMemo(() => ({
    handleUpdatePostComments,
    handleSearchPosts,
    setPostComments,
    setPostsToList,
    postComments,
    postsToList,
    setTags,
    tags, 
  }), 
  [
    handleUpdatePostComments, 
    handleSearchPosts, 
    postComments, 
    postsToList, 
    tags
  ]);

  return (
    <ContentContext.Provider value={context}>
      {children}
    </ContentContext.Provider>
  );
}