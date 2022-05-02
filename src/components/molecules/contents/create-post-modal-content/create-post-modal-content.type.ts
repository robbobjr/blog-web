import { PostDto } from "../../../../services/api/openapi";

export interface CreatePostModalContentProps {
  data: Pick<PostDto, 'title' | 'content' | 'createdAt'>;
}