import { FlexProps } from "@chakra-ui/react";
import { CommentDto } from "../../../../services/api/openapi";

export interface PostCommentProps {
  containerProps?: FlexProps;
  data: CommentDto;
}