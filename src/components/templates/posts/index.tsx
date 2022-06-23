import { Stack } from "@chakra-ui/react";
import { useContent } from "../../../states/hooks/use-content"
import { dracula } from "../../../styles/theme";
import { Post } from "../../organisms/post";

const containerProps = {
  border: "2px solid transparent",
  transition: "0.2s",
  _hover: {
    transform: 'scale(1.01)',
    border: `2px solid ${dracula.Purple}`,
  }
}

export function Posts() {
  const { postsToList } = useContent();

  return (
    <Stack spacing="4" flex="1" minW="320px" alignItems="center" mb="6">
      {postsToList.map((post, i) => (
        <Post
         key={i} 
          data={post} 
          isPostPreview
          containerProps={containerProps}
        />
      ))}
    </Stack>
  );
}