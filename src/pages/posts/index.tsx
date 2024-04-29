import PageAnimation from '@/components/animations/article'
import Section from '@/components/animations/section'
import { PostGridItem } from '@/components/grid-item'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { NextPage } from 'next'

const Post: NextPage = () => {
    return (
        <PageAnimation>
            <Container>
                <Heading as='h3' fontSize={20} mt={4} mb={4}>
                    Posts
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <PostGridItem
                            id='20000000'
                            title='test'
                            thumbnail=''
                            width={2000}
                            height={800}
                        >
                            testetetetetstetstettestte
                        </PostGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </PageAnimation>
    )
}

export default Post
