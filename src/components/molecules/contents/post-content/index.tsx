import { Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { PostContentProps } from "./post-content.type";
import { textGradiant } from "../../../../styles/theme";
import { useEffect } from "react";

export function PostContent({ 
  isPostPreview, 
  data: { title, id, content, link, image }
}: PostContentProps) {
  useEffect(() => {
    if (!link) return;
    fetch(link, { mode: 'no-cors' }).then(console.log).catch(() => {});
  }, [link]);

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
      {image && (
        <Image src={image} alt="post-picture" width="100%"/>
      )}
    </>
  );
}