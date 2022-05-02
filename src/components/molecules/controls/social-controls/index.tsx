import { HStack, StackProps } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { personalConfig } from "../../../../configs/personal";
import { CircularIcon } from "../../../atoms/icons/circular-icon";
import { SiLinkedin } from 'react-icons/si';
import { FaTwitter } from "react-icons/fa";

export function SocialControls(props: StackProps) {
  return (
    <HStack
      spacing="4"
      py="1"
      mx="8"
      color="gray.600"
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
    </HStack> 
  );
}