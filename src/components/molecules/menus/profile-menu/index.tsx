import { Flex, Input, Text, HStack, Box, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import { GoSignOut } from 'react-icons/go';
import { FaUserAstronaut } from "react-icons/fa";
import { simpleHover } from "../../../../styles/theme";

export function ProfileMenu() {
  const { data } = useSession();
  const router = useRouter();

  const { email, image, name } = useMemo(() => {
    return {
      name: data?.user?.name,
      email: data?.user?.email,
      image: data?.user?.image,
    }
  }, [data]);

  const handleSession = useCallback(async () => {
    if (!data) {
      await router.push('/login');
    }

    await signOut();
  }, [data, router]);

  return (
    <Flex align="center">
      <Box 
        mr="4" 
        textAlign="right" 
        display={{ sm: 'none', md: 'none', lg: 'block' }}
      >
        <Text isTruncated>
          {name || "Entrar"}
        </Text>
        <Text color="gray.600" fontSize="small" isTruncated>
          {email || "Não logado"}
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
        <MenuList bg="gray.50">
          {data ? (
            <>
              <MenuItem disabled icon={<FaUserAstronaut size={15}/>} color="gray.700">
                Perfil ( Em breve )
              </MenuItem>
              <MenuItem icon={<GoSignOut size={15}/>} color="gray.700" onClick={handleSession}>
                Sair
              </MenuItem>
            </>
          ): (
            <MenuItem icon={<GoSignOut size={15}/>} color="gray.700" onClick={handleSession}>
              Entrar
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
}