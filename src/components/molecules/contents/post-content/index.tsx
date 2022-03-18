import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { PostContentProps } from "./post-content.type";
import { textGradiant } from "../../../../styles/theme";

export function PostContent({ 
  isPostPreview, 
  data: { title, id, content }
}: PostContentProps) {
  return (
    <>
      <Link passHref={true} href={`/${id}`}>
        <a>
          <Text fontSize="lg" mb="4" isTruncated={isPostPreview}> 
            {title}
          </Text>
          <Text 
            fontSize="sm" 
            opacity={0.7} 
            {...(isPostPreview && textGradiant)}
          >
            {content}
          </Text>
        </a>
      </Link>
    </>
  );
}