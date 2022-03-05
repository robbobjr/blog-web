import { AppProps } from "next/dist/shared/lib/router/router"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
