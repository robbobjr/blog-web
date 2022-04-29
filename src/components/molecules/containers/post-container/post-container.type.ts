import { FlexProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface PostContainerProps extends FlexProps {
  children: ReactElement[] | ReactElement;
  rightSide?: ReactElement[] | ReactElement;
  leftSide?: ReactElement[] | ReactElement;
  size: 'sm' | 'md';
}
