import { Flex } from "@chakra-ui/react";
import { HeaderProfileMenu } from "../../molecules/header-profile-menu";
import { HeaderOptions } from "../../molecules/header-options";
import { HeaderSocial } from "../../molecules/header-social";
import { HeaderProfileUserData } from "../../molecules/header-profile-user-data";
import { useAuth } from "../../../states/hooks/use-auth";
import { HeaderContainer } from "../../atoms/header-container";
import { HeaderSearchInput } from "../../atoms/header-search-input";

export function Header() {
  const { data } = useAuth(); 

  return (
    <HeaderContainer>
      <HeaderSocial />
      <HeaderSearchInput/>
      <HeaderOptions/>
      <Flex align="center" ml={!data && "auto"}>
        <HeaderProfileUserData data={data}/>
        <HeaderProfileMenu data={data}/>
      </Flex>
    </HeaderContainer>
  );
}