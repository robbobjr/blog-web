import { Flex } from "@chakra-ui/react";
import { HeaderProfileMenu } from "../../molecules/header-profile-menu";
import { useAuth } from "../../../states/hooks/use-auth";
import { HeaderContainer } from "../../atoms/header-container";

export function Header() {
  const { data } = useAuth(); 

  return (
    <HeaderContainer>
      <Flex align="center" justify="flex-end" w="100%">
        <HeaderProfileMenu data={data}/>
      </Flex>
    </HeaderContainer>
  );
}