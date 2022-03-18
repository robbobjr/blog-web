import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/shared/lib/router/router"
import { theme } from "../styles/theme"
import { SessionProvider } from 'next-auth/react';
import '../styles/global.scss';
import { ContextContextProvider } from "../contexts/content.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ContextContextProvider>
    </SessionProvider>
  )
}

export default MyApp
