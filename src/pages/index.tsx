import {
    Container,
    Box,
    Heading,
    Text,
    Image,
    Link,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '@/components/animations/section'
import { NextPage } from 'next'
import Timeline from '@/components/timeline'

const Home: NextPage = () => {
    return (
        <Container>
            <Box borderRadius='lg' bg='whiteAlpha.500' p={3} mb={6} mt={6} justifyContent='center'>
                Hello, I&apos;m a backend developer based on japan!
            </Box>

            <Box display={{ md: 'flex' }} justifyContent='space-between'>
                <Box flexGrow={1}>
                    <Heading as='h3' variant='page-title'>
                        Yuta Matsumoto
                    </Heading>
                    <p>Web Developer (Backend / Frontend)</p>
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} display='flex' justifyContent='center'>
                    <Image
                        src='/images/profile-logo.png'
                        alt='my portfolio image'
                        borderColor='whiteAlpha.800'
                        borderWidth={2}
                        borderStyle='solid'
                        maxWidth='100px'
                        display='inline-block'
                        borderRadius='full'
                    />
                </Box>
            </Box>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    About me
                </Heading>
                <Box>
                    <Text>こんにちは。</Text>
                    <Text>
                        日本でフリーランスのWebエンジニアとしてバックエンドを中心にWebアプリケーションの開発を行っています。
                    </Text>
                    <Text>
                        趣味は、サウナ、ロードバイク、サッカー観戦などです。 Web制作 /
                        開発などでお困りでしたら、お声がけください。
                    </Text>
                </Box>
                <Box display='flex' justifyContent='center' mt={4} mb={4}>
                    <Link href='/works'>
                        <Button
                            p={4}
                            colorScheme='teal'
                            color={useColorModeValue('whiteAlpha.900', 'gray.600')}
                        >
                            My portfolio
                            <ChevronRightIcon ml={3} />
                        </Button>
                    </Link>
                </Box>
            </Section>

            <Section delay={0.4}>
                <Heading as='h3' variant='section-title'>
                    Career
                </Heading>
                <Timeline />
            </Section>
        </Container>
    )
}

export default Home
