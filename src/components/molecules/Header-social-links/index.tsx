import { HStack, StackProps } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { personalConfig } from "../../../configs/personal-config";
import { HeaderIcon } from "../../atoms/header-icon";
import { SiLinkedin } from 'react-icons/si';
import { FaMedium, FaTwitter } from "react-icons/fa";

export function HeaderSocialLinks(props: StackProps) {
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
        <HeaderIcon icon={GoMarkGithub} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.linkedin}>
        <HeaderIcon icon={SiLinkedin} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.twitter}>
        <HeaderIcon icon={FaTwitter} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={personalConfig.medium}>
        <HeaderIcon icon={FaMedium} />
      </a>
    </HStack> 
  );
}