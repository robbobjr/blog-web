import { FlexProps } from "@chakra-ui/react";
import { CommentDto } from "../../../../services/openapi";

export interface PostCommentProps {
  containerProps?: FlexProps;
  data: CommentDto;
}