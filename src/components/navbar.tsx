import Logo from './logo'
import Link from 'next/link'
import { ReactNode } from 'react'
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Text,
    ChakraProps,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface Props {
    href: string
    path: string
    children: ReactNode
}

const LinkItem = ({ href, path, children }: Props) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.600', 'whiteAlpha.900')

    return (
        <Link href={href} scroll={false}>
            <Box
                p={2}
                bg={active ? `glassTeal` : undefined}
                color={active ? '202023' : inactiveColor}
            >
                <Text _hover={{ fontWeight: '600' }}>{children}</Text>
            </Box>
        </Link>
    )
}

const NavBar = () => {
    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display='flex'
                flexWrap='wrap'
                p={2}
                maxW='container.md'
                justifyContent='center'
            >
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg'>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href='/works' path={''}>
                        Works
                    </LinkItem>
                    <LinkItem href='/posts' path={''}>
                        Posts
                    </LinkItem>
                    <LinkItem href='/contact' path={''}>
                        Contact
                    </LinkItem>
                </Stack>

                <Box flex={1} justifyContent='right'>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant='outline'
                                aria-label='Options'
                            />
                            <MenuList>
                                <Link href='/' passHref scroll={false}>
                                    <MenuItem>About</MenuItem>
                                </Link>
                                <Link href='/works' passHref scroll={false}>
                                    <MenuItem>Works</MenuItem>
                                </Link>
                                <Link href='/posts' passHref scroll={false}>
                                    <MenuItem>Posts</MenuItem>
                                </Link>
                                <Link href='/contact' passHref scroll={false}>
                                    <MenuItem>Contact</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar
