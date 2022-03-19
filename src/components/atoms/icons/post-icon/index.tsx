import { Box, Icon, Text } from "@chakra-ui/react";

export function PostIcon({ icon, text, ...props }) {
  return (
    <Box 
      {...props} 
      display="flex" 
      alignItems="center" 
      mr="4" 
      cursor="pointer" 
      _hover={{ transform: 'scale(1.025)', }}
      transition="0.2s"
    >
      <Icon as={icon} fontSize={14} color="purple.400"/>
      <Text fontSize="sm" ml="2" color="gray.600">
        {text}
      </Text>
    </Box>
  )
}