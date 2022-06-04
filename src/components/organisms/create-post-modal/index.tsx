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
  useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useRef, cloneElement, useCallback, useEffect, useState, ReactElement } from "react"
import { AiFillEye } from "react-icons/ai";
import { CreatePostModalContent } from "../../molecules/create-post-modal-content";
import { defaultFormattedValue, formatMarkdown, revertMKFormatation } from "../../utils/format-markdown";
import { Textarea } from "../../atoms/textarea";
import { useAuth } from "../../../states/hooks/use-auth";
import { logger } from "../../../services/logger";
import { createPostErrorToast } from "../../../utils/toast";
import { PostDto, PostsService } from "../../../services/api/openapi";
import { useDraft } from "../../../states/hooks/use-draft";
import { ModalIcon } from "../../atoms/icons/modal-icon";

interface CreatePostModalProps {
  children: ReactElement;
  post?: PostDto; 
}

// TODO: refactor into small pieces
/**
 * @summary 
 * Component to create or edit post 
 */
export function CreatePostModal({ children, post }: CreatePostModalProps) {
  const { handleAddDraft, handleGetDraft, handleRemoveDraft } = useDraft();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const history = useRouter();
  const { data } = useAuth();
  const toast = useToast();

  const [formattedValue, setFormattedValue] = useState(defaultFormattedValue)
  const [isVisible, setIsVisible] = useState(false);
  const [inputData, setInputData] = useState(
    handleGetDraft('create-post-modal')
  );

  useEffect(() => {
    if (post) {
      const { content, title, tags, image } = post;
      const stringTags = tags.map(tag => tag.name);
      setInputData(revertMKFormatation(title, content, stringTags));
      const createdAt = new Date().toString();
      setFormattedValue({ createdAt, content, image,title, tags });
      return;
    }
  }, [post]);

  const handleMarkdown = useCallback(() => {
    if (!inputData) {
      setFormattedValue(defaultFormattedValue);
      return defaultFormattedValue;
    }
    const formatedValue = formatMarkdown(inputData);
    setFormattedValue(formatedValue);
    return formatedValue;
  }, [inputData]);

  const handleMKVisibility = useCallback(() => {
    handleMarkdown();
    setIsVisible(state => !state);
  }, [handleMarkdown]);

  const handleSaveDraft = useCallback(() => {
    if (!post) 
      handleAddDraft({ field: 'create-post-modal', content: inputData});
    onClose();
  }, [handleAddDraft, inputData, onClose, post]); 

  const handleCreatePost = useCallback(async () => {
    const { createdAt, ...dto } = handleMarkdown();
    const basePostDto = { userId: data?.user?.id, ...dto };
    
    try {
      if (post) {
        await PostsService.postsControllerUpdate(`${post.id}`, basePostDto);
      } else {
        await PostsService.postsControllerCreate(basePostDto);
      }
      handleRemoveDraft('create-post-modal');
      setFormattedValue(defaultFormattedValue);
      history.push('/');
      onClose();
    } catch (error) {
      toast(createPostErrorToast);
      logger.error({ error, context: "handleCreatePost" });
    }
  }, [toast, data, handleMarkdown, handleRemoveDraft, history, onClose, post]); 

  const handleInputData = useCallback(v => setInputData(v.target.value), []);

  return (
    <>
      { cloneElement(children, { onClick: onOpen }) }
      <Modal
        isCentered
        size="2xl"
        isOpen={isOpen}
        blockScrollOnMount
        scrollBehavior="inside"
        onClose={handleSaveDraft}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent bg="gray.800" mx="4">
          <ModalHeader color="gray.50">
            <ModalCloseButton  />
          </ModalHeader>
          <ModalBody pb={6} mt="2">
            <FormControl display="flex" flexDirection="row">
              {!isVisible && <Avatar name={data?.user?.name} src={data?.user?.image} />}
              {isVisible 
                ? <CreatePostModalContent data={formattedValue} />
                : <Textarea defaultValue={inputData} onChange={handleInputData} size="md"/>
              }
            </FormControl>
          </ModalBody>
          <Box height="0.5px" bg="gray.700" mx="8"/>
          <ModalFooter mx="3">
            <HStack spacing="4" mr="auto">
            <ModalIcon 
              isPressed={isVisible} 
              onClick={handleMKVisibility} 
              icon={AiFillEye}
            />
            </HStack>
            <Button bg="gray.600" onClick={handleCreatePost}>
              Submeter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}