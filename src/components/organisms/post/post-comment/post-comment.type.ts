import { FlexProps } from "@chakra-ui/react";
import { TUser } from "../post.type";

export interface PostCommentProps {
  user: TUser;
  comment: string;
  containerProps?: FlexProps;
}