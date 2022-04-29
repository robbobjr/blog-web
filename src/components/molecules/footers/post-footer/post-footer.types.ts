import { CreateCommentDto, PostDto, UserDto } from "../../../../services/openapi";

export interface PostFooterProps {
  data: Partial<PostDto>;
  commentHandler?: (data: CreateCommentDto) => Promise<any>;
}