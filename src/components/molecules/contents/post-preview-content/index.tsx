import { Text } from "@chakra-ui/react";
import { dracula } from "../../../../styles/theme";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import styles from './post-preview-content.module.scss'; 
import { useMemo } from "react";
import { PostPreviewContentProps } from "./post-preview-content.type";
import { Link } from "../../../atoms/link";

export function PostPreviewContent({ 
  data: { title, slug, description, link }
}: PostPreviewContentProps) {  
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
      {link && (PostLinkP)}
    </>
  );
}