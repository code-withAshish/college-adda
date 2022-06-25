import { ChakraProvider, extendTheme, ScaleFade } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import NavBar from "../components/NavBar";
import { AppProps } from "next/app";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.200",
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
          <NavBar />
          <Component {...pageProps} />
        </ScaleFade>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
