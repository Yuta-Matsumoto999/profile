import { Container, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import PageAnimation from '@/components/animations/article'
import Section from '@/components/animations/section'
import { WorkGridItem } from '@/components/grid-item'
import { NextPage } from 'next'

import WorkImage1 from '../../../public/images/works/work-1.png'

const Work: NextPage = () => {
    return (
        <PageAnimation>
            <Container>
                <Heading as='h3' fontSize={20} mt={4} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id={1} title='天地の旅' thumbnail={WorkImage1}>
                            hewifhewrifhew9ojd0ioewjoi
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id={1} title='天地の旅' thumbnail={WorkImage1}>
                            hewifhewrifhew9ojd0ioewjoi
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id={1} title='天地の旅' thumbnail={WorkImage1}>
                            hewifhewrifhew9ojd0ioewjoi
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </PageAnimation>
    )
}

export default Work
