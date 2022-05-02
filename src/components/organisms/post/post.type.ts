import { FlexProps } from "@chakra-ui/react";
import { CreateCommentDto, PostDto } from "../../../services/api/openapi";

export interface PostProps {
  isPostPreview?: boolean;
  containerProps?: FlexProps;
  commentHandler?: (data: CreateCommentDto) => Promise<any>;
  data: PostDto;
}