import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from "react-icons/ai";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import SocialButton from "../components/atoms/SocialButton";
import Logo from "../components/atoms/Logo";

export default function Home() {
  const router = useRouter();
  const { data } = useSession();

  useEffect(() => {
    if (!data) return;

    router.push('/')
  }, [router, data]);

  const handleGithubSign = useCallback(async () => {
    await signIn('github');
  }, []);

  return (
   <Flex
      w="100vw"
      h="100vh"
      maxW="100vw"
      align="center"
      direction="column"
      justify="center">
      <Flex align="center" justify="center" w="100%" maxW={360} mx="auto" my="8">
        <Logo fontSize="5xl" textAlign="center" />
      </Flex>
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="4">
          <SocialButton handler={handleGithubSign} icon={AiFillGithub} colorScheme="blackAlpha">
            Github
          </SocialButton>
          <SocialButton handler={handleGithubSign} icon={AiFillTwitterCircle} colorScheme="twitter">
            Twitter
          </SocialButton>
          <SocialButton handler={handleGithubSign} icon={AiFillLinkedin} colorScheme="linkedin">
            Linkedin
          </SocialButton>
          <SocialButton handler={handleGithubSign} icon={AiFillGoogleCircle} colorScheme="red">
            Google
          </SocialButton>
        </Stack>
      </Flex>
    </Flex>
  );
}