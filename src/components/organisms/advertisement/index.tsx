import { Image, Text } from "@chakra-ui/react";
import { AdDto } from "../../../services/api/openapi";
import { PostContainer } from "../../atoms/post-container";

type AdvertisementProps = {
  data: AdDto;
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
          alt={data.title}
          src={data.image}
          borderRadius="lg" 
          objectFit='cover' 
          width="20"
        /> 
      } 
    >
      <a 
        target="_blank" 
        href={data.link} 
        rel="noreferrer"
      >
        <Text size="lg" fontFamily="Roboto Serif"> 
          {data.title}
        </Text>
        <Text fontSize="sm" mt="1" opacity={0.7}>
          {data.description}
        </Text>
      </a>
    </PostContainer>
  );
}