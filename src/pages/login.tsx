import { Flex, Stack } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";
import { SocialButton } from "../components/atoms/buttons/social-button";
import { CentralizedContainer } from "../components/molecules/containers/centralized-container";
import { useAuth } from "../states/hooks/use-auth";

export default function Login() {
  const router = useRouter();
  const { data } = useAuth();

  useEffect(() => {
    if (!data) return;

    router.push('/')
  }, [router, data]);

  const handleGithubSign = useCallback(() => {
    signIn('github')
  }, []);

  return (
    <CentralizedContainer>
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" m="4">
        <Stack spacing="4">
          <SocialButton handler={handleGithubSign} icon={AiFillGithub} bg="gray.900">
            Github
          </SocialButton>
          <SocialButton disabled icon={AiFillTwitterCircle} colorScheme="twitter">
            Twitter (Em breve)
          </SocialButton>
          <SocialButton disabled icon={AiFillLinkedin} colorScheme="linkedin">
            Linkedin (Em breve)
          </SocialButton>
          <SocialButton disabled icon={AiFillGoogleCircle} colorScheme="red">
            Google (Em breve)
          </SocialButton>
        </Stack>
      </Flex>
    </CentralizedContainer>
  );
}