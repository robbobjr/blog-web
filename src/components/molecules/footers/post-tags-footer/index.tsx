import { Badge, Stack } from "@chakra-ui/react";
import { dracula } from "../../../../styles/theme";
import { Link } from "../../../atoms/link";

export function PostTagsFooter({
  tags
}) {
  return (
    <Stack direction='row' {...(!tags.length && { display: 'none' })}>
      {tags?.map(tag => 
        <Link key={tag.name} href={`?tag=${tag.name}`}>
           <Badge background={dracula.Pink}>{tag.name}</Badge>
        </Link>
      )}
    </Stack>
  );
}