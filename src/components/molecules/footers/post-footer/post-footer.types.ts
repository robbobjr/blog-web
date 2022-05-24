import { PostTagDto } from "../../../../services/api/openapi";

export interface PostFooterProps {
  data: { id: number; commentsLength: number; tags: PostTagDto[] };
}