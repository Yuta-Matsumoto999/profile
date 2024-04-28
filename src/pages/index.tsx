import { Inter } from 'next/font/google'
import { Box, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

const Home: NextPage = (): JSX.Element => {
    return (
        <Box>
            <Text>Hello World.</Text>
        </Box>
    )
}

export default Home
