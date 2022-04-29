import { Flex } from "@chakra-ui/react";
import { SearchInput } from "../atoms/inputs/search-input";
import { ProfileMenu } from "../molecules/menus/profile-menu";
import { HeaderControls } from "../molecules/controls/header-controls";
import { userAuth } from "../../states/hooks/use-auth";
import { Logo } from "../atoms/logo";

export function Header() {
  const { data } = userAuth();

  return (
    <Flex 
      width="100%"
      display={["none", (!data || data?.user?.permission !== 'ADMIN') ? "none" : "flex"]}
      h="20" 
      minH="20" 
      as="header" 
      maxW={1480} 
      mx="auto" 
      mt="4" 
      align="center" 
      px="6"
    >
      <Logo />
      <SearchInput/>
      <Flex align="center" ml="auto">
        <HeaderControls/>
        <ProfileMenu/>
      </Flex>
    </Flex>
  )
}