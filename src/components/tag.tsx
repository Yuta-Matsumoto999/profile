import type Tag from '@/services/types/tag'
import { Box, useColorMode } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TagProps {
    id: string
    children: ReactNode
}

export const Tag = ({ id, children }: TagProps) => {
    return (
        <Box bg='whiteAlpha.500' borderRadius={3} fontSize={12} p={1} fontWeight={400}>
            {children}
        </Box>
    )
}

interface TagList {
    tags: Tag[]
    justifyContent: string
    mt: number
    mb: number
}

const TagList = ({ tags, justifyContent, mt, mb }: TagList) => {
    return (
        <Box mt={mt} mb={mb} display='flex' flexWrap='wrap' justifyContent={justifyContent}>
            {tags.map((item, index) => {
                return (
                    <Tag id={item.id} key={index}>
                        #{item.title}
                    </Tag>
                )
            })}
        </Box>
    )
}

export default TagList
