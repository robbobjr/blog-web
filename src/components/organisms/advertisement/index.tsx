import { Image, Text } from "@chakra-ui/react";
import { PostAdDto } from "../../../services/api/openapi";
import { PostContainer } from "../../atoms/post-container";

type AdvertisementProps = {
  data: PostAdDto;
};

export function Advertisement({
  data,  
}: AdvertisementProps) {
  return (
    <PostContainer 
      size="sm"
      bg="gray.900"
      maxWidth="772px"
      rightSide={
        <Image 
          border="2px solid #bd93f9"
          ml="8"
          h="20" 
          my="auto" 
          alt={data.adContent.title}
          src={data.adContent.image}
          borderRadius="lg" 
          objectFit='cover' 
          width="20"
        /> 
      } 
    >
      <a 
        target="_blank" 
        href={data.adContent.link} 
        rel="noreferrer"
      >
        <Text size="lg" fontFamily="Roboto Serif"> 
          {data.adContent.title}
        </Text>
        <Text fontSize="sm" mt="1" opacity={0.7}>
          {data.adContent.description}
        </Text>
      </a>
    </PostContainer>
  );
}