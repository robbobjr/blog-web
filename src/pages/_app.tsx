import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/shared/lib/router/router"
import { theme } from "../styles/theme"
import { SessionProvider } from 'next-auth/react';
import '../styles/global.scss';
import '../styles/highlight.scss';
import { apiConfig } from "../configs/api-config";
import { ContentContextProvider } from "../states/contexts/contet-context";
import { OpenAPI } from "../services/api/openapi";
import { CustomSessionProvider } from "../states/contexts/custom-session-context";
import { easterEggLog } from "../utils/easter-egg-log";

OpenAPI.BASE = apiConfig.baseURL; 
console.info(easterEggLog.content);

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <CustomSessionProvider>
          <ContentContextProvider>
            <Component {...pageProps} />
          </ContentContextProvider>
        </CustomSessionProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
