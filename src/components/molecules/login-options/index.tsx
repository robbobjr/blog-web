import { Stack } from "@chakra-ui/react";
import { LoginOptionsContainer } from "../../atoms/login-options-container";
import { SocialButton } from "../../atoms/social-button";
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { useCallback } from "react";
import { signIn } from "next-auth/react";

export function LoginOptions() {
  const handleGithubSign = useCallback(() => {
    signIn('github')
  }, []);
  
  return (
    <LoginOptionsContainer>
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
    </LoginOptionsContainer>
  );
}