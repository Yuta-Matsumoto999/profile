import { Box, useColorMode } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TagProps {
    id: string
    children: ReactNode
}

const Tag = ({ id, children }: TagProps) => {
    return (
        <Box bg='whiteAlpha.500' borderRadius={10} fontSize={12} p={2} fontWeight={600}>
            {children}
        </Box>
    )
}

export default Tag
