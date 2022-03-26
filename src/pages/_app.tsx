import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/shared/lib/router/router"
import { theme } from "../styles/theme"
import { SessionProvider } from 'next-auth/react';
import '../styles/global.scss';
import { ContextContextProvider } from "../contexts/content";
import { OpenAPI } from "../services/openapi";

OpenAPI.BASE = process.env.NEXT_PUBLIC_APP_URL;

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
