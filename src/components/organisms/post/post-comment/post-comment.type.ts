import { FlexProps } from "@chakra-ui/react";
import { UserDto } from "../../../../services/openapi";

export interface PostCommentProps {
  user: UserDto;
  comment: string;
  containerProps?: FlexProps;
}