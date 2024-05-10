import PageAnimation from '@/components/animations/article'
import Section from '@/components/animations/section'
import { PostGridItem } from '@/components/grid-item'
import TagList from '@/components/tag'
import ListRepository from '@/services/posts/repository/listRepository'
import type Post from '@/services/types/post'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { NextPage } from 'next'

const Post: NextPage<{
    staticPostList: Post[]
}> = ({ staticPostList }) => {
    return (
        <PageAnimation>
            <Container>
                <Heading as='h3' fontSize={20} mt={4} mb={4}>
                    Posts
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {staticPostList.map((item, index) => {
                        return (
                            <Section delay={0.3} key={index}>
                                <PostGridItem
                                    id={item.id}
                                    title={item.title}
                                    thumbnail={item.thumbnail.url}
                                    width={item.thumbnail.width}
                                    height={item.thumbnail.height}
                                >
                                    <TagList
                                        tags={item.tags}
                                        justifyContent='start'
                                        mt={2}
                                        mb={0}
                                    />
                                </PostGridItem>
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

    const staticPostList = await repository.get()

    return {
        props: {
            staticPostList,
        },
        revalidate: 5,
    }
}

export default Post
