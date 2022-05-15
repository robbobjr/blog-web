import { createContext, useEffect } from "react";
import { useCallback, useMemo, useState } from "react";
import { AxiosAPI } from "../../services/api/axios";
import { CommentDto, PostDto, PostRateDto, PostTagDto } from "../../services/api/openapi";

export interface ContentContextProps {
  tags: PostTagDto[];
  setTags: (tags: PostTagDto[]) => void;
  handleSearchPosts(params: Record<string, string | string[]>): Promise<void>;
  setPosts: (data: PostDto[]) => void;
  isLoading: boolean;
  commentByPost: Map<number, CommentDto[]>;
  rateByPost: Map<number, PostRateDto[]>;
  handleUpdatePostComments: (data: CommentDto) => void;
  posts: PostDto[];
}

export const ContentContext = createContext({} as ContentContextProps);

export function ContentContextProvider({ children }) {
  const [tags, setTags] = useState([] as PostTagDto[]); 
  const [posts, setPosts] = useState([] as PostDto[]);
  const [
    commentByPost, 
    setCommentByPost
  ] = useState<Map<number, CommentDto[]>>(new Map()); 
  const [
    rateByPost, 
    setRateByPost
  ] = useState<Map<number, PostRateDto[]>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!posts.length) return;
    const commentByPostDto: Array<[number, CommentDto[]]> = [];
    const rateByPostDto: Array<[number, PostRateDto[]]> = [];
    posts.forEach(({ id, rates, comments }) => {
      rateByPostDto.push([id, rates])
      commentByPostDto.push([id, comments]);
    });

    setRateByPost(new Map(rateByPostDto));
    setCommentByPost(new Map(commentByPostDto));
    setIsLoading(false);
  }, [posts]);

  const handleSearchPosts = useCallback(
    async (params: Record<string, string | string[]>) => {
      const client = new AxiosAPI("ContentContext::handleSearchPosts");
      const foundPosts = await client.getPosts(params);
      setPosts(foundPosts);
  }, []); 

  const handleUpdatePostComments = useCallback((data: CommentDto) => {
    const commentByPostDto = new Map(commentByPost);
    const postComments = commentByPostDto.get(data.postId);
    commentByPostDto.set(data.postId, [...postComments, data]);
    setCommentByPost(commentByPostDto);
  }, [commentByPost]); 


  const context = useMemo(() => ({
    commentByPost,
    rateByPost,
    isLoading,
    handleUpdatePostComments,
    handleSearchPosts,
    setPosts,
    setTags,
    posts,
    tags, 
  }), 
  [
    handleUpdatePostComments,
    handleSearchPosts, 
    commentByPost, 
    rateByPost, 
    isLoading, 
    posts, 
    tags
  ]);

  return (
    <ContentContext.Provider value={context}>
      {children}
    </ContentContext.Provider>
  );
}