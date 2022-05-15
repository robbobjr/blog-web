import { Badge, Box, BoxProps } from "@chakra-ui/react"
import { useCallback } from "react"
import { PostTagDto } from "../../services/api/openapi"
import { useContent } from "../../states/hooks/use-content"
import { randomDraculaBackground } from "../../styles/theme"

interface TopicsProps extends BoxProps {}

export function Topics({ ...props }: TopicsProps) {
  const { handleSearchPosts } = useContent();
  const { tags } = useContent();

  const handleTopic = useCallback(async (tag: string) => {
    await handleSearchPosts({ tag })
  }, [handleSearchPosts]);

  return (
    <Box display="block" float="none" textAlign="center" {...props}>
       {tags.map(tag => 
        <Badge 
          margin="0.5" 
          fontSize="md" 
          key={tag.name}
          cursor="pointer"
          onClick={() => {handleTopic(tag.name)}}
          background={randomDraculaBackground()}
        >
          {tag.name}
        </Badge>
      )}
    </Box>
  )
}