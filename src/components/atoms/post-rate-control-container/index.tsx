import { Stack } from "@chakra-ui/react";
import { ReactElement } from "react";

type PostRateControlContainerProps = {
  controllSide: "right" | "left";
  children: ReactElement[];
  hideRateControl: boolean;
  iconsSpacing: number;
  handleOnMouseLeave: () => void;
};

export function PostRateControlContainer({
  children,
  controllSide,
  hideRateControl,
  iconsSpacing,
  handleOnMouseLeave
}: PostRateControlContainerProps) {
  return (
    <Stack 
      display={{ base: "none", sm: 'none', md: hideRateControl ? 'none': 'inherit' }}
      spacing={iconsSpacing}
      borderRightWidth={controllSide === "right" ? 0 : 1} 
      borderRightColor="gray.700" 
      minW="14"
      maxW="14" 
      align="center" 
      justify="center"
      pr={controllSide === "right" ? 0 : "4"}
      pl={controllSide === "right" ? "4" : 0}
      ml={controllSide === "right" ? "auto" : 0}
      onMouseLeave={handleOnMouseLeave}
    >
      {children}
    </Stack>
  );
}