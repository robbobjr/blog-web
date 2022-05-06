import { Flex } from "@chakra-ui/react";
import { ProfileMenu } from "../molecules/menus/profile-menu";
import { HeaderControls } from "../molecules/controls/header-controls";
import { BlogLogo } from "../atoms/blog-logo";
import { SearchInput } from "../atoms/inputs/search-input";
import { SocialControls } from "../molecules/controls/social-controls";

export function Header({ handleInput }) {
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
      <SearchInput handleInput={handleInput} />
      <HeaderControls/>
      <ProfileMenu/>
    </Flex>
  )
}