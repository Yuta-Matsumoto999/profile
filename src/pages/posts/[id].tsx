import PageAnimation from '@/components/animations/article'
import Post from '@/services/types/post'
import IdListRepository from '@/services/posts/repository/idListRepository'
import ShowRepository from '@/services/posts/repository/showRepository'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Tag from '@/components/tag'
import TagList from '@/components/tag'
import Datetime from '@/components/datetime'

const PostDetail: NextPage<{
    id: string
    staticPost: Post
}> = ({ id, staticPost }) => {
    return (
        <PageAnimation>
            <Container>
                <Box display='flex' flexWrap='wrap' justifyContent='center'>
                    <Heading as='h3' fontSize={28} mt={6} mb={5} justifyItems='center'>
                        {staticPost.title}
                    </Heading>
                </Box>
                <TagList tags={staticPost.tags} justifyContent='start' mt={0} mb={4} />
                <Box display='flex' justifyContent='end'>
                    <Text fontSize={12} mr={1}>
                        更新日時:
                    </Text>
                    <Datetime
                        dateTimeString={staticPost.updatedAt}
                        mt={0}
                        mb={2}
                        fontSize={12}
                        fontWeight={300}
                    />
                </Box>
                <Box mb={4}>
                    <Image
                        src={staticPost.thumbnail.url}
                        alt='post detail thumbnail'
                        width={staticPost.thumbnail.width}
                        height={staticPost.thumbnail.height}
                        className='grid-item-thumbnail'
                    />
                </Box>
                <Box
                    className='content'
                    dangerouslySetInnerHTML={{ __html: staticPost.content }}
                ></Box>
            </Container>
        </PageAnimation>
    )
}

export async function getStaticPaths() {
    const repository = new IdListRepository()
    const paths = await repository.get()

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({
    params,
}: {
    params: {
        id: string
    }
}) {
    const id = params.id
    const repository = new ShowRepository()

    const staticPost = await repository.get(id)

    if (!staticPost) {
        return { notFound: true }
    }

    return {
        props: {
            id,
            staticPost,
        },
        revalidate: 5,
    }
}

export default PostDetail
