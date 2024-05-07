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
    link: string
}

export const WorkGridItem = ({
    children,
    id,
    title,
    thumbnail,
    width,
    height,
    link,
}: WorkGridItemProps) => {
    return (
        <Box w='100%'>
            <NextLink href={link} target='_blank'>
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
    id: string
    title: string
    thumbnail: string
    width: number
    height: number
    children: ReactNode
}

export const PostGridItem = ({
    id,
    title,
    thumbnail,
    width,
    height,
    children,
}: PostGridItemProps) => {
    return (
        <Box w='100%'>
            <NextLink href={`/posts/${id}`}>
                <LinkBox cursor='pointer' display='flex' flexDirection='column' alignItems='start'>
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={width}
                        height={height}
                        className='grid-item-thumbnail'
                    />
                    <Text mt={3} fontSize={16} fontWeight={600}>
                        {title}
                    </Text>
                    {children}
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
