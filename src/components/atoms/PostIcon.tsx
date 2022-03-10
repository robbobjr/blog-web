import { Icon, Link, Text } from "@chakra-ui/react";

export default function PostIcon({ icon, text }) {
  return (
    <Link display="flex" alignItems="center" mr="4" _hover={{
      transform: 'scale(1.025)',
    }}>
      <Icon as={icon} fontSize={14} color="purple.400"/>
      <Text fontSize="sm" ml="2" color="gray.600">
        {text}
      </Text>
    </Link>
  )
}