import { PostDto } from "../../../../services/openapi";

export interface CreatePostModalContentProps {
  data: Pick<PostDto, 'title' | 'content' | 'createdAt'>;
}