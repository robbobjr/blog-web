import { HStack, StackProps } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { personalConfig } from "../../../../configs/personal-config";
import { CircularIcon } from "../../../atoms/icons/circular-icon";
import { SiLinkedin } from 'react-icons/si';
import { FaMedium, FaTwitter } from "react-icons/fa";

export function SocialControls(props: StackProps) {
  return (
    <HStack
      spacing="4"
      py="1"
      mr={{ base: "auto", sm: 0, md: "8" }}
      color="gray.600"
      ml={{ sm: 0, md: "auto"}}
      {...props}
    >
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.github}>
        <CircularIcon icon={GoMarkGithub} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.linkedin}>
        <CircularIcon icon={SiLinkedin} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.twitter}>
        <CircularIcon icon={FaTwitter} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.medium}>
        <CircularIcon icon={FaMedium} />
      </a>
    </HStack> 
  );
}