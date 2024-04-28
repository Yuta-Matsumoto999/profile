import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const logoImage = `/images/header-title-logo.png`

    return (
        <Link href='/'>
            <LogoBox>
                <Image src={logoImage} width={24} height={24} alt='logo' />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight='bold'
                    ml={1}
                    fontSize={16}
                >
                    Yuta Matsumoto
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
