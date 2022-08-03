import { FlexProps } from "@chakra-ui/react";
import { PostDto } from "../../../services/api/openapi";

export interface PostProps {
  isPostPreview?: boolean;
  containerProps?: FlexProps;
  data: PostDto;
}