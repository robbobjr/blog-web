import { PostDto } from "../../../services/api/openapi";

export interface CreatePostModalBodyProps {
  data: Pick<PostDto, 'title' | 'content' | 'createdAt' | 'user'>;
  isVisible: boolean;
  inputData: string;
  handleInputData: (data: any) => void;
}