import { 
  Button, 
  FormControl, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  useDisclosure,
  Avatar,
  Box,
  HStack,
  Icon,
  Flex,
  useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useRef, cloneElement, useCallback, useEffect, useState, ReactElement } from "react"
import { AiFillEye } from "react-icons/ai";
import { useContent } from "../../../../states/hooks/use-content";
import { PostDto, PostsService } from "../../../../services/openapi";
import { CreatePostModalContent } from "../../contents/create-post-modal-content";
import { defaultFormattedValue, formatMarkdown, revertMKFormatation } from "../../../utils/format-markdown";
import { Textarea } from "../../../atoms/textarea";
import { useAuth } from "../../../../states/hooks/use-auth";
import { logger } from "../../../../services/logger";
import { createPostErrorToast } from "../../../../utils/toast";

interface CreatePostModalProps {
  children: ReactElement;
  post?: PostDto; 
}

/**
 * @summary 
 * Component to create or edit post 
 */
export function CreatePostModal({ children, post }: CreatePostModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [defaultValue, setDefaultValue] = useState<string | null>();
  const [formattedValue, setFormattedValue] = useState(defaultFormattedValue)

  const toast = useToast();
  const initialRef = useRef();
  const history = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useAuth();
  const { handleAddDraft, handleGetDraft, handleRemoveDraft } = useContent();

  useEffect(() => {
    if (post) {
      const { content, title, tags } = post;
      const stringTags = tags.map(tag => tag.name);
      setDefaultValue(revertMKFormatation(title, content, stringTags));
      setFormattedValue({ 
        createdAt: new Date().toString(), 
        content, 
        title, 
        tags, 
      });
      return;
    }

    const content = handleGetDraft('create-post-modal');
    setDefaultValue(content);
  }, [isOpen, handleGetDraft, post]);

  const handleMarkdown = useCallback(() => {
    if (!defaultValue) {
      setFormattedValue(defaultFormattedValue);
      return defaultFormattedValue;
    }

    const data = formatMarkdown(defaultValue);
    logger.info({ payload: data, context: "CreatePostModal", msg: "handleMarkdown" });
    setFormattedValue(data);
    return data;
  }, [defaultValue]);

  const handleMKVisibility = useCallback(() => {
    handleMarkdown();
    setIsVisible(state => !state);
  }, [handleMarkdown]);

  const handleSaveDraft = useCallback(() => {
    handleAddDraft({ field: 'create-post-modal', content: defaultValue});
    onClose();
  }, [handleAddDraft, defaultValue, onClose, ]); 

  const handleCreatePost = useCallback(async () => {
    const { createdAt, ...dto } = handleMarkdown();
    try {
      if (post) {
        await PostsService.postsControllerUpdate(String(post.id), {
          userId: data?.user?.id,
          ...dto,
        });
      } else {
        await PostsService.postsControllerCreate({ userId: data?.user?.id, ...dto });
      }
      handleRemoveDraft('create-post-modal');
      setFormattedValue(defaultFormattedValue);
      history.push('/')
      onClose();
    } catch (error) {
      toast(createPostErrorToast);
      logger.error({ error, context: "CreatePostModal", msg: "handleCreatePost" });
    }
  }, [toast, data?.user?.id, handleMarkdown, handleRemoveDraft, history, onClose, post]); 

  return (
    <>
      { cloneElement(children, { onClick: onOpen }) }
      <Modal
        isCentered
        initialFocusRef={initialRef}
        blockScrollOnMount
        isOpen={isOpen}
        onClose={handleSaveDraft}
        scrollBehavior="inside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent bg="gray.800" mx="4">
          <ModalHeader color="gray.50">
            <ModalCloseButton  />
          </ModalHeader>
          <ModalBody pb={6} mt="2">
            <FormControl display="flex" flexDirection="row">
              {!isVisible && <Avatar name={data?.user?.name} src={data?.user?.image} />}
              {isVisible ? (
                <CreatePostModalContent data={formattedValue} />
              ) : (
                <Textarea
                  {...(defaultValue && { defaultValue })}
                  onChange={v => setDefaultValue(v.target.value)}
                  size="md"
                />
              )}
            </FormControl>
          </ModalBody>
          <Box height="0.5px" bg="gray.700" mx="8"/>
          <ModalFooter mx="3">
            <HStack spacing="4" mr="auto">
            <Flex 
              onClick={handleMKVisibility} 
              cursor="pointer" 
              align="center" 
              justify="center" 
              bg={isVisible ? "gray.900" : "gray.600"} 
              px="2" 
              py="1" 
              borderRadius="md"
            >
              <Icon as={AiFillEye} fontSize={22} color="gray.50" />
            </Flex>
            </HStack>
            <Button bg="gray.600" onClick={handleCreatePost}>
              Submeter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}