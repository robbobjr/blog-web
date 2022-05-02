import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { FaHandshake, FaHome, FaPen, FaTrashAlt } from "react-icons/fa";
import { PostDto, PostsService } from "../../../../services/api/openapi";
import { useAuth } from "../../../../states/hooks/use-auth";
import { PostIcon } from "../../../atoms/icons/post-icon";
import { Link } from "../../../atoms/link";
import { Alert } from "../../../organisms/alert";
import { CreatePostModal } from "../../modals/create-post-modal";

interface PostHeaderProps {
  data: PostDto;
  isPostPreview?: boolean;
}

export function PostHeader({ 
  data: postData,
  isPostPreview, 
}: PostHeaderProps) {
  const { data } = useAuth();
  const history = useRouter();
  const { participation, user, id } = useMemo(() => postData, [postData]);
  
  const handleDeletePost = useCallback(async () => {
    try {
      await PostsService.postsControllerDelete(String(id));
      history.push('/')
    } catch {
      alert('Error')
    }
  }, [id, history]);

  return (
    <Flex align="center">
      <Avatar size="xs" name={user?.name} src={user?.image}/>
      <Text fontSize="smaller" color="gray.600" ml="2">
        Escrito por {user?.name}
      </Text>
      <Flex ml="auto">
        {participation && (
          <PostIcon
            icon={FaHandshake}
            text={`Participação ofertada:${participation}%`} 
          />
        )}
        {data?.user?.permission === 'ADMIN' && (
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
            <CreatePostModal post={postData}>
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
  )
}