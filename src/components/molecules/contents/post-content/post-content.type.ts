import { PostDto } from "../../../../services/openapi";

export interface PostContentProps {
  isPostPreview: boolean;
  data: PostDto;
}