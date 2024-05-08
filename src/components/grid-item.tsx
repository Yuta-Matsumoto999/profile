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
    isShowDetail: boolean
    link: string | null
}

export const WorkGridItem = ({
    children,
    id,
    title,
    thumbnail,
    width,
    height,
    isShowDetail,
    link,
}: WorkGridItemProps) => {
    return (
        <Box w='100%'>
            {isShowDetail && (
                <NextLink href={`works/${id}`} target='_blank'>
                    <LinkBox
                        cursor='pointer'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        <Image
                            src={thumbnail}
                            alt={title}
                            width={width}
                            height={height}
                            className='grid-item-thumbnail'
                        />
                        <Text mt={3} fontSize={14} fontWeight={600}>
                            {title}
                        </Text>
                    </LinkBox>
                </NextLink>
            )}
            {isShowDetail === false && (
                <NextLink href={String(link)} target='_blank'>
                    <LinkBox
                        cursor='pointer'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        <Image
                            src={thumbnail}
                            alt={title}
                            width={width}
                            height={height}
                            className='grid-item-thumbnail'
                        />
                        <Text mt={3} fontSize={14} fontWeight={600}>
                            {title}
                        </Text>
                    </LinkBox>
                </NextLink>
            )}
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
