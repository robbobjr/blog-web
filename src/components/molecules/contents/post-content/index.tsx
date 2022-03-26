import { Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { PostContentProps } from "./post-content.type";
import { dracula, textGradiant } from "../../../../styles/theme";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import styles from './link-preview.module.scss'; 

export function PostContent({ 
  isPostPreview, 
  data: { title, slug, content, link, image }
}: PostContentProps) {
  return (
    <>
      <Link passHref={true} href={`/${slug}`}>
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
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <LinkPreview url={link} width="100%"
            backgroundColor={dracula.BackgroundPrimary}
            borderColor={dracula.BackgroundPrimary}
            primaryTextColor={dracula.Foreground}
            secondaryTextColor={dracula.Foreground}
            className={`${styles.noHover} ${link.includes('github') && styles.container}`}
            borderRadius="15px"
            showLoader={false}
          />
        </a>
      )}
    </>
  );
}