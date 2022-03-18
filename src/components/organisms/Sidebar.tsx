import { Box, Icon, Stack, Text, Link } from "@chakra-ui/react";
import { RiDashboardLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" fontSize="small" color="purple.400">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="pink.400">
              <Icon as={RiDashboardLine} size={20}/>
              <Text ml="4" fontWeight="medium">Feed</Text>
            </Link>
            <Link display="flex" alignItems="center" color="gray.50">
              <Icon as={RiInputMethodLine} size={20}/>
              <Text ml="4" fontWeight="medium">Projetos</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="small" color="purple.400">
            COMUNIDADE
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="gray.50">
              <Icon as={RiDashboardLine} size={20}/>
              <Text ml="4" fontWeight="medium">Updates</Text>
            </Link>
            <Link display="flex" alignItems="center" color="gray.50">
              <Icon as={RiInputMethodLine} size={20}/>
              <Text ml="4" fontWeight="medium">Discussões</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}