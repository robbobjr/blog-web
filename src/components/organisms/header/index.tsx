import { Flex } from "@chakra-ui/react";
import { HeaderProfileMenu } from "../../molecules/header-profile-menu";
import { HeaderOptions } from "../../molecules/header-options";
import { SearchInput } from "../../atoms/search-input";
import { HeaderBlogLogo } from "../../molecules/header-blog-logo";
import { HeaderSocialLinks } from "../../molecules/Header-social-links";

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
      <HeaderBlogLogo />
      <HeaderSocialLinks />
      <SearchInput />
      <HeaderOptions/>
      <HeaderProfileMenu/>
    </Flex>
  )
}