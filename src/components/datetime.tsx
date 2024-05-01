import { Text } from '@chakra-ui/react'

interface Props {
    dateTimeString: string
    mt: number
    mb: number
    fontSize: number
    fontWeight: number
}

const Datetime = ({ dateTimeString, mt, mb, fontSize, fontWeight }: Props) => {
    const date = new Date(dateTimeString)
    const formattedDate = date.toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <Text mt={mt} mb={mb} fontSize={fontSize} fontWeight={fontWeight}>
            {formattedDate}
        </Text>
    )
}

export default Datetime
