import { Text, TextProps } from "@chakra-ui/react";

interface LogoProps extends TextProps {
  
}

export default function Logo({ ...props }: LogoProps) {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64" {...props}>
      {"<startgo/>"}
    </Text>
  );
}