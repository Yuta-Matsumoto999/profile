import PageAnimation from '@/components/animations/article'
import Work from '@/services/types/work'
import IdListRepository from '@/services/works/repository/idListRepository'
import ShowRepository from '@/services/works/repository/showRepository'
import { Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'

const WorkDetail: NextPage<{
    id: string
    staticWork: Work
}> = ({ id, staticWork }) => {
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

    const staticWork = await repository.get(id)

    if (!staticWork) {
        return { notFound: true }
    }

    return {
        props: {
            id,
            staticWork,
        },
        revalidate: 5,
    }
}

export default WorkDetail
