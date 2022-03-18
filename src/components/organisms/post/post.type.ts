import { FlexProps } from "@chakra-ui/react";

export type TUser = {
  name?: string; 
  image?: string; 
}

export type TPost = {
  participation: string; 
  comments: Array<any>; 
  joiners: number; 
  positions: number; 
  user: TUser;
  title: string; 
  link?: string;
  image?: string;
  content: string;
  id: string;
}

export type TPostComment = {
  user: TUser,
  comment: string,
  rate: number;
  id: string;
}

export interface PostProps {
  isPostPreview?: boolean;
  containerProps?: FlexProps;
  commentHandler?: (data: TPostComment) => void;
  data: TPost;
}