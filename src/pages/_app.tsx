import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/shared/lib/router/router"
import { theme } from "../styles/theme"
import { SessionProvider } from 'next-auth/react';
import '../styles/global.scss';
import { apiConfig } from "../configs/api-config";
import { ContentContextProvider } from "../states/contexts/contet-context";
import { OpenAPI } from "../services/api/openapi";

OpenAPI.BASE = apiConfig.baseURL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <ContentContextProvider>
          <Component {...pageProps} />
        </ContentContextProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
