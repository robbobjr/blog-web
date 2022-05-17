import { Badge, Stack } from "@chakra-ui/react";
import { useCallback } from "react";
import { useContent } from "../../../../states/hooks/use-content";
import { dracula } from "../../../../styles/theme";

export function PostTagsFooter({
  data
}) {
  const { handleSearchPosts } = useContent();

  const handleTopic = useCallback((tag: string) => {
    handleSearchPosts({ tag });
  }, [handleSearchPosts]);

  return (
   <Stack
      display="block"
      float="none"
      direction='row'
      {...(!data.tags.length && { display: 'none' })}
    >
      {data.tags?.map(tag => 
        <Badge
          cursor="pointer"
          onClick={() => handleTopic(tag.name)}
          key={tag.name}
          background={dracula.Pink}>{tag.name}</Badge>
      )}
    </Stack>
  );
}