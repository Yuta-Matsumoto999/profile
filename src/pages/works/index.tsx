import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import PageAnimation from '@/components/animations/article'
import Section from '@/components/animations/section'
import { WorkGridItem } from '@/components/grid-item'
import { NextPage } from 'next'
import type Work from '@/services/types/work'
import ListRepository from '@/services/works/repository/listRepository'

const Work: NextPage<{
    staticWorkList: Work[]
}> = ({ staticWorkList }) => {
    return (
        <PageAnimation>
            <Container>
                <Heading as='h3' fontSize={20} mt={4} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {staticWorkList.map((item, index) => {
                        return (
                            <Section delay={0.3} key={index}>
                                <WorkGridItem
                                    id={item.id}
                                    title={item.title}
                                    thumbnail={item.thumbnail.url}
                                    width={item.thumbnail.width}
                                    height={item.thumbnail.height}
                                    link={item.link}
                                >
                                    {item.overview}
                                </WorkGridItem>
                            </Section>
                        )
                    })}
                </SimpleGrid>
            </Container>
        </PageAnimation>
    )
}

export async function getStaticProps() {
    const repository = new ListRepository()
    const staticWorkList = await repository.get()

    return {
        props: {
            staticWorkList,
        },
        revalidate: 5,
    }
}

export default Work
