import { FlexProps } from "@chakra-ui/react";
import { CommentDto } from "../../../services/api/openapi";

export interface CommentProps {
  containerProps?: FlexProps;
  data: CommentDto;
}