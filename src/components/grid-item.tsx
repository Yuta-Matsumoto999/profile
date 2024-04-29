import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

interface WorkGridItemProps {
    children: ReactNode
    id: number
    title: string
    thumbnail: StaticImageData
}

export const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => {
    return (
        <Box w='100%'>
            <NextLink href={`/works/${id}}`}>
                <LinkBox cursor='pointer' display='flex' flexDirection='column' alignItems='center'>
                    <Image
                        src={thumbnail}
                        alt={title}
                        placeholder='blur'
                        className='grid-item-thumbnail'
                    />
                    <Text mt={3} fontSize={15}>
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
