import { Flex } from "@chakra-ui/react";
import { HeaderProfileMenu } from "../../molecules/header-profile-menu";
import { HeaderOptions } from "../../molecules/header-options";
import { HeaderSearchInput } from "../../atoms/header-search-input";
import { HeaderBlogLogo } from "../../molecules/header-blog-logo";
import { HeaderSocialLinks } from "../../molecules/header-social-links";
import { HeaderProfileUserData } from "../../molecules/header-profile-user-data";
import { useAuth } from "../../../states/hooks/use-auth";
import { HeaderContainer } from "../../atoms/header-container";

export function Header() {
  const { data } = useAuth(); 

  return (
    <HeaderContainer>
      <HeaderBlogLogo />
      <HeaderSocialLinks />
      <HeaderSearchInput />
      <HeaderOptions/>
      <Flex align="center" ml={!data && "auto"}>
        <HeaderProfileUserData data={data}/>
        <HeaderProfileMenu data={data}/>
      </Flex>
    </HeaderContainer>
  );
}