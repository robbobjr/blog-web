import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { IconType } from "react-icons/lib";
import { AxiosAPI } from "../../../services/api/axios";
import { useAuth } from "../../../states/hooks/use-auth";
import { useContent } from "../../../states/hooks/use-content";
import { simpleHover } from "../../../styles/theme";

interface CircularIconProps extends FlexProps {
  icon: IconType;
}

export function CircularIcon({ icon, ...props }: CircularIconProps) {
  const [isPressed, setIsPressed] = useState(false);
  const { setPosts } = useContent();
  const history = useRouter();
  const { data } = useAuth(); 
 
  const handleUserLikedPosts = useCallback(async () => {
    if (!data?.user) return;
    setIsPressed(state => !state);
    const client = new AxiosAPI("HeaderControls");
    const foundPosts = await client.getPosts(
      isPressed 
      ? undefined 
      : { userId: `${data?.user?.id}`, rateValue: "1" }
    );
    setPosts(foundPosts);
    if (history.pathname !== "/[tag]") return history.push("/ptbr");
  }, [data?.user, history, isPressed, setPosts]);
  
  return (
    <Flex
      cursor="pointer"
      bg="gray.800"
      borderRadius="50%"
      align="center"
      justify="center"
      _hover={simpleHover}
      onClick={handleUserLikedPosts}
      p="2"
      {...props}
    >
      <Icon as={icon} fontSize={20}  color={isPressed && "pink.400"}/>
    </Flex>
  );
}