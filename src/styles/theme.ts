import { ChakraProps, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props: ChakraProps) => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
        },
    }),
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                paddingTop: 5,
                paddingBottom: 5,
            },
        },
    },
    Link: {
        baseStyle: (props: ChakraProps) => ({
            color: mode('#3d7aed', '#ff63c3'),
            textUnderlineOffset: 3,
        }),
    },
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
}

const colors = {
    glassTeal: '#88ccca',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme
