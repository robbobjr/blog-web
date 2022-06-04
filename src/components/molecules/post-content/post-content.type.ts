import { PostDto } from "../../../services/api/openapi";

export interface PostContentProps {
  data: Pick<PostDto, 'title' | 'content' | 'createdAt'>;
}