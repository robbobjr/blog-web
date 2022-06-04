import { Text } from "@chakra-ui/react";
import { PostContentPreviewProps } from "./post-content-preview.type";
import { Link } from "../../atoms/link";

export function PostContentPreview({ 
  data: { title, slug, description, link }
}: PostContentPreviewProps) {  

  return (
    <>
      <Link href={`/post/${slug}`}>
        <Text fontWeight="600" fontSize="2xl" mb="4">{title}</Text>
        <Text 
          fontSize="md"
          fontFamily="Roboto Serif" 
          opacity={0.7} 
          display={{ base: "none", sm: "inherit" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Link>
    </>
  );
}