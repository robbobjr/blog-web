import { Flex, Text, Box, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useToast } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import { GoSignOut } from 'react-icons/go';
import { MdCopyAll, MdLogout } from "react-icons/md";
import { simpleHover } from "../../../styles/theme";
import { useAuth } from "../../../states/hooks/use-auth";
import { jwtCopiedToast } from "../../../utils/toast";

export function ProfileMenu() {
  const { data } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const { email, image, name } = useMemo(() => {
    return {
      name: data?.user?.name,
      email: data?.user?.email,
      image: data?.user?.image,
    }
  }, [data]);

  const handleSession = useCallback(async () => {
    if (!data) await router.push('/login');
    await signOut();
  }, [data, router]);

  const handleCopyJWT = useCallback(() => {
    navigator.clipboard.writeText(data.jwt);
    toast({...jwtCopiedToast });
  }, [data, toast]);

  return (
    <Flex align="center" ml={!data && "auto"}>
      <Box 
        mr="4" 
        textAlign="right" 
        display={{ base: "none", sm: 'none', md: 'none', lg: 'block' }}
      >
        <Text isTruncated>
          {name || "Não logado"}
        </Text>
        <Text color="gray.600" fontSize="small" isTruncated>
          {email || "nao@logado.com"}
        </Text>
      </Box>
      <Menu>
        <MenuButton as="button">
        <Avatar 
          size="md"
          name={name}
          src={image} 
          cursor="pointer" 
          _hover={data ? simpleHover : {}}
        />
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