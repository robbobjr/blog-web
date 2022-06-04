import { CommentRateDto, PostRateDto } from "../../../services/api/openapi";

export interface PostRateControlProps  {
  hideRateControl?: boolean;
  /**
   * @summary 
   * Since rate is used to manage comment rate as well as post rate,
   * this function is comming from outside the component
   */
  handleRate: (value: number) => Promise<PostRateDto | CommentRateDto>; 
  size: 'sm' | 'md';
  data: { rates: CommentRateDto[] | PostRateDto[] };
  controllSide?: "left" | "right";
  isDislikeEnabled?: boolean;
}
