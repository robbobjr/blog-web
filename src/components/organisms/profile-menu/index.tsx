import { Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useToast, Flex } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { GoSignOut } from 'react-icons/go';
import { MdCopyAll, MdLogout } from "react-icons/md";
import { useAuth } from "../../../states/hooks/use-auth";
import { containerRightToLeft } from "../../../styles/animations";
import { simpleHover } from "../../../styles/theme";
import { jwtCopiedToast } from "../../../utils/toast";
import { ChakraDiv } from "../../atoms/chakra-div";

export function ProfileMenu() {
  const router = useRouter();
  const toast = useToast();
  const { data } = useAuth();

  const handleSession = useCallback(async () => {
    if (!data) await router.push('/login');
    await signOut();
  }, [data, router]);

  const handleCopyJWT = useCallback(() => {
    navigator.clipboard.writeText(data.jwt);
    toast({...jwtCopiedToast });
  }, [data, toast]);

  return (
    <Flex position="absolute" right="2.5%">
      <Menu>
        <MenuButton as="button">
          <ChakraDiv {...containerRightToLeft}>
            <Avatar 
              size="sm"
              name={data?.user?.name}
              src={data?.user?.image} 
              cursor="pointer" 
              _hover={data ? simpleHover : {}}
            />
          </ChakraDiv>
        </MenuButton>
        <MenuList>
          {data ? (
            <>
              <MenuItem icon={<MdLogout size={15}/>} onClick={handleSession}>
                Sair
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleCopyJWT} icon={<MdCopyAll size={15}/>}>
                api key - {data.jwt.slice(0, 5)}...
              </MenuItem>
            </>
          ): (
            <MenuItem icon={<GoSignOut size={15}/>} onClick={handleSession}>
              Entrar
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
}