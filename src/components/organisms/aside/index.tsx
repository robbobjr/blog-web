import { Box } from "@chakra-ui/react";
import { Topics } from "../../molecules/topics";

// TODO: it should be one of aside components
export function Aside() {
  return (
    <Box
      position="absolute"
      display={{base:"none",sm:"none",md:"block"}}
    >
      <Topics
        textAlign="left"
        maxW="200px"
        display={{ sm: "none", lg: "block"}} 
      />
    </Box>
  );
}