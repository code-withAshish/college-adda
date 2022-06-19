import { ChakraProvider, extendTheme, ScaleFade } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.300",
      },
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider>
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          <Component {...pageProps} />
        </ScaleFade>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
