import { CommentRateDto, PostRateDto } from "../../../../services/api/openapi";

export interface PostRateControlsProps  {
  hideRateControl?: boolean;
  /**
   * @summary 
   * Since rate is used to manage comment rate as well as post rate,
   * this function is comming from outside the component
   */
  handleRate: (value: number) => Promise<PostRateDto | CommentRateDto>; 
  size: 'sm' | 'md';
  data: { postId?: number, commentId?: number };
  isBorderLeft?: boolean;
  isDislikeEnabled?: boolean;
}
