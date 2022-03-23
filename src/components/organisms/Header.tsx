import { Flex, Input, Text, HStack, Box, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import { RiSearch2Line, RiNotificationLine, RiUserAddLine } from 'react-icons/ri';
import { simpleHover } from "../../styles/theme";
import { GoPlus, GoSignOut } from 'react-icons/go';
import { FaUserAstronaut } from "react-icons/fa";
import { Logo } from "../atoms/Logo";
import { CreatePostModal } from "../molecules/modals/create-post-modal";
import { Icon } from "../atoms/icons";

export function Header() {
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
    <Flex w="100%" h="20" minH="20" as="header" maxW={1480} mx="auto" mt="4" align="center" px="6">
      <Logo />
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.600"
        position="relative"
        bg="gray.800"
        borderRadius="full"
        display={{ sm: 'none', md: 'flex' }}
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar projeto"
          mx="4"
          _placeholder={{
            color: 'gray.600'
          }} 
          size="sm"
        />
        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          pr="8"
          py="1"
          mx="8"
          color="gray.600"
          borderRightWidth={1}
          borderColor="gray.800">
          <CreatePostModal>
            <Flex bg="gray.800" borderRadius="50%" align="center" justify="center" p="2">
              <Icon as={GoPlus} fontSize={20} />
            </Flex>
          </CreatePostModal>
          <Flex bg="gray.800" borderRadius="50%" align="center" justify="center" p="2">
            <Icon as={RiNotificationLine} fontSize={20}/>
          </Flex>
          <Flex bg="gray.800" borderRadius="50%" align="center" justify="center" p="2">
            <Icon as={RiUserAddLine} fontSize={20}/>   
          </Flex>
        </HStack> 
        <Flex align="center">
          <Box display={{ sm: 'none', md: 'block' }} mr="4" textAlign="right" _hover={data ? {} : simpleHover} onClick={data ? () => {} : handleSession}>
            <Text>
              {name || "Entrar"}
            </Text>
            <Text color="gray.600" fontSize="small">
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
            {data && (
              <MenuList bg="gray.50">
                <MenuItem icon={<FaUserAstronaut size={15}/>} color="gray.700" onClick={handleSession}>
                  Perfil
                </MenuItem>
                <MenuItem icon={<GoSignOut size={15}/>} color="gray.700" onClick={handleSession}>
                  Sair
                </MenuItem>
              </MenuList>
            )}
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}