import { Container, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Head from "next/head";

interface Props {
    children: ReactNode;    
}

const Layout = ({ children }: Props): JSX.Element => (
    <Box as="main" pb={5} display="flex" flexDirection="column" minH="100vh">
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>Yuta Matsumoto - Homepage</title>
        </Head>
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
)

export default Layout