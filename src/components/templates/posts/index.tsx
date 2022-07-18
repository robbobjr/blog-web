import { Stack } from "@chakra-ui/react";
import { PostDto } from "../../../services/api/openapi";
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

export function Posts({ data: posts }: { data: PostDto[] }) {
  return (
    <Stack spacing="4" flex="1" minW="320px" alignItems="center">
      {posts.map((post, i) => (
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