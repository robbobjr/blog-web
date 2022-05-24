import { Avatar, Flex, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { FaHome, FaPen, FaTrashAlt } from "react-icons/fa";
import { PostDto, PostsService } from "../../../../services/api/openapi";
import { logger } from "../../../../services/logger";
import { useAuth } from "../../../../states/hooks/use-auth";
import { deletePostErrorToast } from "../../../../utils/toast";
import { PostIcon } from "../../../atoms/icons/post-icon";
import { Link } from "../../../atoms/link";
import { Alert } from "../../../organisms/alert";
import { CreatePostModal } from "../../../organisms/create-post-modal";

interface PostHeaderProps {
  data: PostDto;
  isPostPreview?: boolean;
}

// TODO: Refactor this component into small pieces
export function PostHeader({ 
  data: post,
  isPostPreview, 
}: PostHeaderProps) {
  const { data } = useAuth();
  const history = useRouter();
  const { user, id } = useMemo(() => post, [post]);
  const toast = useToast();

  const handleDeletePost = useCallback(async () => {
    try {
      await PostsService.postsControllerDelete(String(id));
      history.push('/')
    } catch (error) {
      logger.error({ error, context: 'PostHeader::handleDeletePost' })
      toast(deletePostErrorToast);
    }
  }, [id, history, toast]);

  return (
    <Flex align="center">
      <Avatar size="xs" name={user?.name} src={user?.image}/>
      <Text fontSize="smaller" color="gray.600" ml="2" display={{ base: 'none' ,sm: 'none', md: 'inherit' }}>
        Escrito por {user?.name}
      </Text>
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
            <CreatePostModal post={post}>
              <PostIcon
                icon={FaPen}
                text={"Editar"} 
              />
            </CreatePostModal>
          </>   
        )}
        {!isPostPreview && (
          <Link href="/"><PostIcon icon={FaHome} text={"Home"}/></Link>
        )}
      </Flex>
    </Flex>
  );
}