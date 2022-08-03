import { Flex, Text } from "@chakra-ui/react";
import { useMemo } from "react";

type PostCreatorProps = {
  data: { createdAt: string };
}

export function PostDate({ data: { createdAt } }: PostCreatorProps) {
  const date = useMemo(() => 
    new Date(createdAt).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  ,[]);

  return (
    <Flex align="center" justify="center">
      <Text 
        fontSize="smaller" 
        color="gray.600" 
        display={{ base: 'none' ,sm: 'none', md: 'inherit' }}
      >
        {date}
      </Text>
    </Flex>
  );
}