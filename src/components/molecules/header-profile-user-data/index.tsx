import { Box, Text } from "@chakra-ui/react";
import { CustomSession } from "../../../states/contexts/custom-session-context";

type HeaderProfileUserProps = {
  data?: CustomSession;
};

export function HeaderProfileUserData({ data }: HeaderProfileUserProps) {
  return (
    <Box 
      mr="4" 
      textAlign="right" 
      display={{ base: "none", sm: 'none', md: 'none', lg: 'block' }}
    >
      <Text isTruncated>
        {data?.user?.name || "Não logado"}
      </Text>
      <Text color="gray.600" fontSize="small" isTruncated>
        {data?.user?.email || "nao@logado.com"}
      </Text>
    </Box>
  );
}