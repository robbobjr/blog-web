import { Image, Text } from "@chakra-ui/react";
import { dracula, textGradiant } from "../../../../styles/theme";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import styles from './post-preview-content.module.scss'; 
import { useMemo } from "react";
import { PostPreviewContentProps } from "./post-preview-content.type";
import { Link } from "../../../atoms/link";

export function PostPreviewContent({ 
  data: { title, slug, description, link, image }
}: PostPreviewContentProps) {
  const PostImage = useMemo(() => 
    <Image src={image} alt="post-picture" width="100%" borderRadius="2xl"/>,
    [image],
  );
  
  const PostLinkP = useMemo(() => 
    <a href={link} target="_blank" rel="noreferrer">
      <LinkPreview url={link} width="100%"
        backgroundColor={dracula.BackgroundPrimary}
        borderColor={dracula.BackgroundPrimary}
        primaryTextColor={dracula.Foreground}
        secondaryTextColor={dracula.Foreground}
        className={`${styles.noHover} ${link?.includes('github') && styles.link}`}
        borderRadius="2xl"
        showLoader={false}
      />
    </a>,
    [link],
  );

  return (
    <>
      <Link href={`/${slug}`}>
        <Text fontSize="2xl" mb="4" isTruncated={true}>{title}</Text>
        <Text 
          fontSize="sm" 
          opacity={0.7} 
          {...textGradiant}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Link>
      {image && (PostImage)}
      {link && (PostLinkP)}
    </>
  );
}