import { Flex } from "@chakra-ui/react";
import { ProfileMenu } from "../../molecules/menus/profile-menu";
import { HeaderControls } from "../../molecules/controls/header-controls";
import { SearchInput } from "../../atoms/inputs/search-input";
import { SocialControls } from "../../molecules/controls/social-controls";
import { BlogLogo } from "../../molecules/logos/blog-logo";

export function Header() {
  return (
    <Flex 
      width="100%"
      visibility={"initial"}
      h="20" 
      minH="20" 
      as="header" 
      maxW={1480} 
      mx="auto" 
      mt="4" 
      justify="flex-end"
      align="center" 
      px="10"
    >
      <BlogLogo/>
      <SocialControls />
      <SearchInput />
      <HeaderControls/>
      <ProfileMenu/>
    </Flex>
  )
}