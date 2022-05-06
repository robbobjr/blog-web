import { Badge, Box, BoxProps, SimpleGrid, SimpleGridProps } from "@chakra-ui/react"
import { PostTagDto } from "../../services/api/openapi"
import { randomDraculaBackground } from "../../styles/theme"
import { Link } from "../atoms/link"

interface TopicsProps extends BoxProps {
  tags: PostTagDto[]
}

export function Topics({ tags, ...props }: TopicsProps) {
  return (
    <Box display="block" float="none" textAlign="center" {...props}>
       {tags?.map(tag => 
        <Link key={tag.name} href={`/${tag.name}`}>
          <Badge 
            margin="0.5" 
            fontSize="md" 
            background={randomDraculaBackground()}
          >
            {tag.name}
          </Badge>
        </Link>
      )}
    </Box>
  )
}