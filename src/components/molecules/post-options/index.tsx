import { Flex, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaHome, FaPen, FaTrashAlt } from "react-icons/fa";
import { PostDto, PostsService } from "../../../services/api/openapi";
import { logger } from "../../../services/logger";
import { deletePostErrorToast } from "../../../utils/toast";
import { PostIcon } from "../../atoms/post-icon";
import { Link } from "../../atoms/link";
import { Alert } from "../../atoms/alert";
import { CreatePostModal } from "../../organisms/create-post-modal";

type PostOptionsProps = {
  data: PostDto;
};

export function PostOptions ({
  data,
}: PostOptionsProps) {
  const history = useRouter();
  const toast = useToast();
  const { pathname } = useRouter();

  const handleDeletePost = useCallback(async () => {
    try {
      await PostsService.postsControllerDelete(String(data.id));
      history.push('/')
    } catch (error) {
      logger.error({ error, context: 'PostHeader::handleDeletePost' })
      toast(deletePostErrorToast);
    }
  }, [data.id, history, toast]);

  return (
    <Flex ml="auto">
      {data?.user?.role === 'ADMIN' && (
        <>
          <Alert 
            title="Deletar post" 
            description="Você deseja deletar este post para sempre?"
            handler={handleDeletePost}
          >
            <PostIcon
              icon={FaTrashAlt}
              text={"Deletar"} 
            />
          </Alert>
          <CreatePostModal post={data}>
            <PostIcon
              icon={FaPen}
              text={"Editar"} 
            />
          </CreatePostModal>
        </>   
      )}
      {pathname !== '/' && (
        <Link href="/">
          <PostIcon icon={FaHome} text={"Home"}/>
        </Link>
      )}
    </Flex>
  );
}