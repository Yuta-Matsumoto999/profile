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
import { Skills } from '@/const/skills'
import SkillGrid from '@/components/skills'

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
                <Box fontSize={15}>
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

            <Section delay={0.4}>
                <Heading as='h3' variant='section-title'>
                    I❤️
                </Heading>
                <Box display='flex' fontSize='15px'>
                    <Text>サウナ / 温泉</Text>
                    <Image
                        src='/images/favorites/sauna-logo.png'
                        alt='sauna logo image'
                        w={6}
                        h={6}
                        ml={2}
                    />
                </Box>
                <Box display='flex' mt={2}>
                    <Text fontSize='15px'>浦和レッドダイアモンズ</Text>
                    <Image
                        src='/images/favorites/reds_flag.png'
                        alt='reds image'
                        w={6}
                        h={6}
                        ml={2}
                    />
                </Box>
                <Text mt={2} fontSize='15px'>
                    ロードバイク 🚴‍♂️
                </Text>
                <Text mt={2} fontSize='15px'>
                    神社巡り ⛩️
                </Text>
            </Section>

            <Section delay={0.4}>
                <Heading as='h3' variant='section-title'>
                    Skills
                </Heading>
                <SkillGrid skills={Skills} />
            </Section>
        </Container>
    )
}

export default Home
