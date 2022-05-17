import { Flex } from "@chakra-ui/react";
import { useContent } from "../../states/hooks/use-content";
import { PostComment } from "../organisms/post/post-comment";

export function Comments() {
  const { postComments } = useContent();

  return (
    <Flex direction="column" align="center" w="100%">
      {postComments.map((comment, i, a) => (
        <PostComment 
          key={i} 
          data={comment} 
          containerProps={{ 
            borderBottomRadius: i === a.length - 1 ? 8 : 0, 
            borderTopRadius: 0,
            maxWidth: "772px",
          }} 
        />
      ))}
    </Flex>
  );
}