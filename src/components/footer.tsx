import { Box, Text, Image, SimpleGrid, Container } from '@chakra-ui/react'
import Link from 'next/link'
import Section from './animations/section'

interface Props {
    title: string
    logo: string
    link: string
}

export const Item = ({ title, logo, link }: Props) => {
    return (
        <Box display={{ base: 'block', sm: 'flex' }} justifyContent='center'>
            <Link href={link}>
                <Box display='flex' alignItems='center' color='#2c7a7b'>
                    <Image src={logo} alt='footer item logo' maxW='20px' h='auto' />
                    <Text ml={2} fontWeight={600} fontSize={14}>
                        {title}
                    </Text>
                </Box>
            </Link>
        </Box>
    )
}

const Footer = () => {
    return (
        <Container mt='auto'>
            <Section delay={0.4}>
                <Box
                    display='flex'
                    pt={5}
                    pb={5}
                    maxW='container.md'
                    flexWrap='wrap'
                    justifyContent='center'
                >
                    <SimpleGrid columns={[1, 3, 3]} gap={{ base: 4, md: 6 }}>
                        <Item
                            title='Yuta-Matsumoto999'
                            logo='/images/footer-github.png'
                            link='https://github.com/Yuta-Matsumoto999'
                        />
                        <Item
                            title='tigers.football'
                            logo='/images/footer-instagram.png'
                            link='https://www.instagram.com/tigers.football?igsh=MWM3YTQwazVncjhhZg%3D%3D&utm_source=qr'
                        />
                        <Item
                            title='Yuta-Matsumoto'
                            logo='/images/footer-facebook.png'
                            link='https://www.facebook.com/profile.php?id=100012227116047'
                        />
                    </SimpleGrid>
                </Box>
                <Text align='center' fontSize={13} color='gray.500'>
                    @ 2024 Yuta Matsumoto All right Reserved.
                </Text>
            </Section>
        </Container>
    )
}

export default Footer
