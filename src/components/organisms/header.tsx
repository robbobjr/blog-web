import { Box, Flex } from "@chakra-ui/react";
import { ProfileMenu } from "../molecules/menus/profile-menu";
import { HeaderControls } from "../molecules/controls/header-controls";
import { useAuth } from "../../states/hooks/use-auth";
import { BlogLogo } from "../atoms/blog-logo";
import { SearchInput } from "../atoms/inputs/search-input";
import { SocialControls } from "../molecules/controls/social-controls";

export function Header() {
  const { data } = useAuth();

  return (
    <Flex 
      width="100%"
      visibility={["hidden", (!data || data?.user?.permission !== 'ADMIN') ? "hidden" : "initial"]}
      h="20" 
      minH="20" 
      as="header" 
      maxW={1480} 
      mx="auto" 
      mt="4" 
      align="center" 
      px="10"
    >
      <BlogLogo/>
      <SocialControls ml="auto"/>
      <SearchInput />
      <HeaderControls/>
      <Flex align="center">
        <ProfileMenu/>
      </Flex>
    </Flex>
  )
}