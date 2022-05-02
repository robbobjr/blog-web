import { CreateCommentDto, PostDto } from "../../../../services/api/openapi";

export interface PostFooterProps {
  data: Partial<PostDto>;
  commentHandler?: (data: CreateCommentDto) => Promise<any>;
}