import { Button, Flex, Icon } from "@chakra-ui/react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

type PageUpButtonProps = {
  direction: "up" | "down";
};

export function PageUpButton({ direction }: PageUpButtonProps) {
  return (
    <Flex
      placeContent="center"
      position="fixed"
      bottom="10vh"
      right="2.5%"
    >
      <Button
        w="10"
        h="10"
        color="purple.400"
        background="transparent"
        borderRadius="50%"
        _hover={{ background: "gray.800" }}
        onClick={() => window.scroll({ 
          top: direction === "down" ? document.body.scrollHeight : 0, 
          behavior: "smooth" 
        })}
      >
        <Icon
          as={direction === "down" ? BsChevronDoubleDown: BsChevronDoubleUp}
          w="5"
          h="5" 
        />
      </Button>
    </Flex>
  );
}