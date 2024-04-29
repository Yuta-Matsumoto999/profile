import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

interface WorkGridItemProps {
    children: ReactNode
    id: string
    title: string
    thumbnail: string
    width: number
    height: number
}

export const WorkGridItem = ({
    children,
    id,
    title,
    thumbnail,
    width,
    height,
}: WorkGridItemProps) => {
    return (
        <Box w='100%'>
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor='pointer' display='flex' flexDirection='column' alignItems='center'>
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={width}
                        height={height}
                        className='grid-item-thumbnail'
                    />
                    <Text mt={3} fontSize={16}>
                        {title}
                    </Text>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

interface PostGridItemProps {
    children: ReactNode
    id: string
    title: string
    thumbnail: string
    width: number
    height: number
}

export const PostGridItem = ({
    children,
    id,
    title,
    thumbnail,
    width,
    height,
}: PostGridItemProps) => {
    return (
        <Box w='100%'>
            <NextLink href={`/posts/${id}`}>
                <LinkBox cursor='pointer' display='flex' flexDirection='column' alignItems='center'>
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={width}
                        height={height}
                        className='grid-item-thumbnail'
                    />
                    <Text mt={3} fontSize={16}>
                        {title}
                    </Text>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export const GridItemStyle = () => (
    <Global
        styles={{
            '.grid-item-thumbnail': {
                borderRadius: '12px',
            },
        }}
    />
)
