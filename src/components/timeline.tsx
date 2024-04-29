import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    date: string
    children: ReactNode
}

const TimelineItem = ({ children, date }: Props) => (
    <Box display='flex' alignItems='start'>
        <Box>
            <Text pt={3} pr={5} minW='70px' fontSize='14px' fontWeight={400}>
                {date}
            </Text>
        </Box>
        <Box
            alignItems='start'
            pt={3}
            pl={5}
            pb={5}
            maxW='100%'
            borderLeft='2px #F5F0E8 solid'
            borderColor='gray.300'
            position='relative'
            _before={{
                content: `""`,
                width: '10px',
                height: '10px',
                background: '#319795',
                position: 'absolute',
                left: '-6px',
                top: '18px',
                borderRadius: 50,
            }}
        >
            {children}
        </Box>
    </Box>
)

const Timeline = () => (
    <Box width='full' maxWidth='xl' mx='auto'>
        <TimelineItem date={'1996年'}>
            <Text fontWeight={600}>埼玉県に生まれる</Text>
            <Text fontSize={13} mt={2}>
                埼玉県上尾市出身・在住
            </Text>
        </TimelineItem>
        <TimelineItem date={'2015年'}>
            <Text fontWeight={600}>さいたま市立浦和南高校卒業</Text>
            <Text fontSize={13} mt={2}>
                サッカー部出身 / GK
            </Text>
        </TimelineItem>
        <TimelineItem date={'2019年'}>
            <Text fontWeight={600}>日本体育大学卒業</Text>
            <Text fontSize={13} mt={2}>
                中学校教諭一種免許状（保健体育）取得
            </Text>
            <Text fontSize={13} mt={2}>
                高等学校教諭一種免許状（保健体育）取得
            </Text>
        </TimelineItem>
        <TimelineItem date={'2020年'}>
            <Text fontWeight={600}>エンジニアとして勤務開始</Text>
            <Text fontSize={13} mt={2}>
                自社webアプリケーション開発
            </Text>
            <Text fontSize={13} mt={2}>
                自社コーポレートサイト改修
            </Text>
            <Text fontSize={13} mt={2}>
                自社ECサイト立ち上げ
            </Text>
            <Text fontSize={13} mt={2}>
                自社会員管理システム開発
            </Text>
            <Text fontSize={13} mt={2}>
                POSレジシステムバックエンド開発
            </Text>
        </TimelineItem>
        <TimelineItem date={'2024年'}>
            <Text fontWeight={600}>フリーランスとして独立</Text>
            <Text fontSize={13} mt={2}>
                バックエンドエンジニアとして活動中
            </Text>
        </TimelineItem>
    </Box>
)

export default Timeline
