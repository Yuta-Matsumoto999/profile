import PageAnimation from '@/components/animations/article'
import Post from '@/services/types/post'
import IdListRepository from '@/services/posts/repository/idListRepository'
import ShowRepository from '@/services/posts/repository/showRepository'
import { Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'

const PostDetail: NextPage<{
    id: string
    staticPost: Post
}> = ({ id, staticPost }) => {
    return (
        <PageAnimation>
            <Container>
                <Heading as='h3' fontSize={20} mt={4} mb={4}></Heading>
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
