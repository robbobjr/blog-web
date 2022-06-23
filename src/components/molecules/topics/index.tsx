import { Badge, Box, BoxProps } from "@chakra-ui/react"
import { useCallback } from "react"
import { useContent } from "../../../states/hooks/use-content"
import { containerUp } from "../../../styles/animations";
import { randomDraculaBackground } from "../../../styles/theme"
import { ChakraDiv } from "../../atoms/chakra-div";

interface TopicsProps extends BoxProps {}

export function Topics({ ...props }: TopicsProps) {
  const { handleSearchPosts } = useContent();
  const { tags } = useContent();

  const handleTopic = useCallback(async (tag: string) => {
    await handleSearchPosts({ tag })
  }, [handleSearchPosts]);

  return (
    <Box display="block" float="none" textAlign="center" {...props} 
      as={ChakraDiv}
      {...containerUp}
    >
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