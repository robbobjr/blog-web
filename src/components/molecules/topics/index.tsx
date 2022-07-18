import { Badge, Box, BoxProps } from "@chakra-ui/react"
import { useCallback } from "react"
import { PostTagDto } from "../../../services/api/openapi";
import { useContent } from "../../../states/hooks/use-content"
import { containerUp } from "../../../styles/animations";
import { randomDraculaBackground } from "../../../styles/theme"
import { ChakraDiv } from "../../atoms/chakra-div";
import { Link } from "../../atoms/link";

interface TopicsProps extends BoxProps {
  data: PostTagDto[];
}

export function Topics({ data: tags, ...props }: TopicsProps) {
  return (
    <Box display="block" float="none" textAlign="center" {...props} 
      as={ChakraDiv}
      {...containerUp}
    >
      {tags.map(tag => 
        <Link href={"/" + tag.name} key={tag.name}>
          <Badge 
            margin="0.5" 
            fontSize="md" 
            cursor="pointer"
            background={randomDraculaBackground()}
          >
            {tag.name}
          </Badge>
        </Link>
      )}
    </Box>
  )
}