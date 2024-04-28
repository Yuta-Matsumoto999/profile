import { Box, Text, Image, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

interface SkillItemProps {
    id: number
    title: string
    logo: string
}

export const SKillItem = ({ id, title, logo }: SkillItemProps) => {
    return (
        <Box display='flex' alignItems='center' mt={3} mb={3}>
            <Box>
                <Text fontWeight={600} fontSize={15}>
                    {id}. {title}
                </Text>
            </Box>
            <Box>
                <Image src={logo} alt='skill logo' borderRadius='full' w='30px' h='30px' ml={3} />
            </Box>
        </Box>
    )
}

interface SkillProps {
    title: string
    items: Array<any>
}

export const Skill = ({ title, items }: SkillProps) => {
    return (
        <>
            <Box display='flex' justifyContent='center'>
                <Heading as='h3' fontSize={15} fontWeight={900} color='#DC2E5F' mb={3}>
                    {title}
                </Heading>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Box
                    border='1px solid'
                    borderRadius={12}
                    pt={3}
                    pl={4}
                    pr={4}
                    pb={3}
                    bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')}
                    minW='100%'
                    boxShadow={useColorModeValue(
                        '4px 4px 3px 0px rgba(6, 6, 6, 0.4)',
                        '4px 4px 2px 0px rgba(247, 245, 245, 0.29)',
                    )}
                >
                    {items.map((item, index) => {
                        return (
                            <Box key={index}>
                                <SKillItem id={item.id} title={item.name} logo={item.logo} />
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </>
    )
}

interface SkillGridProps {
    skills: Array<any>
}

const SkillGrid = ({ skills }: SkillGridProps) => {
    return (
        <SimpleGrid columns={[1, 1, 2]} gap={6} mb={10}>
            {skills.map((skill, index) => {
                return (
                    <Box key={index}>
                        <Skill title={skill.title} items={skill.items} />
                    </Box>
                )
            })}
        </SimpleGrid>
    )
}

export default SkillGrid
