import { Icon, Button, ButtonProps, As } from "@chakra-ui/react";

interface SocialButtonProps extends ButtonProps {
  handler?: () => void;
  icon: As<any>;
  children: string;
}

export function SocialButton({ 
  handler, 
  icon, 
  children,
  ...props
}: SocialButtonProps) {
  return (
    <Button onClick={handler} size="lg" {...props}>
      <Icon as={icon} fontSize={20} mr="2"/>
      {children}
    </Button>
  );
}