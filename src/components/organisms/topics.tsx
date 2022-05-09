import { Badge, Box, BoxProps } from "@chakra-ui/react"
import { useCallback } from "react"
import { PostsService, PostTagDto } from "../../services/api/openapi"
import { useContent } from "../../states/hooks/use-content"
import { randomDraculaBackground } from "../../styles/theme"

interface TopicsProps extends BoxProps {
  tags: PostTagDto[]
}

export function Topics({ tags, ...props }: TopicsProps) {
  const { setPosts } = useContent();

  const handleTopic = useCallback((tag: string) => {
    PostsService.postsControllerFindAll(
      tag
    ).then(data => setPosts(data));
  }, [setPosts]);

  return (
    <Box display="block" float="none" textAlign="center" {...props}>
       {tags?.map(tag => 
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