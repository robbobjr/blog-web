import { Badge, Stack } from "@chakra-ui/react";
import { useCallback } from "react";
import { PostsService } from "../../../../services/api/openapi";
import { useContent } from "../../../../states/hooks/use-content";
import { dracula } from "../../../../styles/theme";
import { Link } from "../../../atoms/link";

export function PostTagsFooter({
  tags
}) {
  const { setPosts } = useContent();

  const handleTopic = useCallback((tag: string) => {
    PostsService.postsControllerFindAll(
      tag
    ).then(data => setPosts(data));
  }, [setPosts]);

  return (
    <Stack display="block" float="none" direction='row' {...(!tags.length && { display: 'none' })}>
      {tags?.map(tag => 
        <Badge
          cursor="pointer"
          onClick={() => handleTopic(tag.name)}
          key={tag.name}
          background={dracula.Pink}>{tag.name}</Badge>
      )}
    </Stack>
  );
}