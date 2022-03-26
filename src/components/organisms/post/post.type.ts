import { FlexProps } from "@chakra-ui/react";
import { CreateCommentDto, PostDto } from "../../../services/openapi";

export interface PostProps {
  isPostPreview?: boolean;
  containerProps?: FlexProps;
  commentHandler?: (data: CreateCommentDto) => void;
  data: PostDto;
}