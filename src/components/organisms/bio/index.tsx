import { Avatar, Flex, Text } from "@chakra-ui/react";

type BioProps = {
};

export function Bio({}: BioProps) {
  return (
    <Flex align="center" justify="center" direction="column">
      <Avatar 
        size="xl" 
        name="Roberto Junior" 
        src="https://avatars.githubusercontent.com/u/60328400?v=4"
        border="2px solid #fff"
        mb="2"
      />
      <Text>
        Roberto Junior
      </Text>
    </Flex>
  );
}