import { Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { useContent } from "../../states/hooks/use-content";
import { PostComment } from "../organisms/post/post-comment";

export function Comments({ data }) {
  const { commentByPost } = useContent(); 

  const comments = useMemo(
    () => commentByPost.get(data.postId) || [], 
    [commentByPost, data.postId]
  );

  return (
    <Flex direction="column" align="center" w="100%">
      {comments.map((comment, i, a) => (
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