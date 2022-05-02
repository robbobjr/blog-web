import { CommentRateDto, PostRateDto } from "../../../../services/api/openapi";

export interface PostRateControlsProps  {
  hideRateControl?: boolean;
  handleRate: (value: number) => Promise<PostRateDto | CommentRateDto>; 
  size: 'sm' | 'md';
  data: { rates: PostRateDto[] | CommentRateDto[]; } 
  isBorderLeft?: boolean;
}
