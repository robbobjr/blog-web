import { Box } from "@chakra-ui/react";
import { Topics } from "../../molecules/topics";

export function Aside({ data: tags }) {
  return (
    <Box
      as="aside"
      position="absolute"
      display={{ base:"none", sm:"none", md:"block" }}
    >
      <Topics
        textAlign="left"
        maxW="200px"
        data={tags}
        display={{ sm: "none", lg: "block"}} 
      />
    </Box>
  );
}