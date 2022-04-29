import { PostDto } from "../../../../services/openapi";

export interface PostContentProps {
  data: Pick<PostDto, 'title' | 'content' | 'createdAt'>;
}