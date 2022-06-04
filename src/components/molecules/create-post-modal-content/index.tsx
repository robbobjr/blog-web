import { CreatePostModalContentProps } from "./create-post-modal-content.type";
import styles from './create-post-modal-content.module.scss'; 
import { useMemo } from "react";
import { markdown } from "../../../services/markdown";

export function CreatePostModalContent({ 
  data: { title, content, createdAt }
}: CreatePostModalContentProps) {
  const formatted = useMemo(() => markdown.render(content),[content]);

  const date = useMemo(() => {
    return new Date(createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }, [createdAt]);

  // TODO: Refactor to use chakra-ui
  return (
    <>
      <article className={styles.post}>
        <time>{date}</time>
        <h1>{title}</h1>
        <div 
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: formatted }} 
        />
      </article>
    </>
  );
}