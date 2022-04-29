import { CommentRateDto, PostRateDto } from "../../../../services/openapi";

export interface PostRateControlsProps  {
  hideRateControl?: boolean;
  handleRate: (value: number) => Promise<PostRateDto | CommentRateDto>; 
  size: 'sm' | 'md';
  data: { rates: PostRateDto[] | CommentRateDto[]; } 
  isBorderLeft?: boolean;
}