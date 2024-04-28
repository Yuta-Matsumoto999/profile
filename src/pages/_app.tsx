import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/main";
import { AnimatePresence } from "framer-motion";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />;
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}
