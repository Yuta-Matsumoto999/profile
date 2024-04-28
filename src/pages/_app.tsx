import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import theme from '@/styles/theme'

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <AnimatePresence
                    initial={true}
                    mode='wait'
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component key={router.asPath} {...pageProps} />;
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
