import Thumbnail from './thumbnail'

interface Work {
    id: string
    title: string
    overview: string | null
    content: string | null
    thumbnail: Thumbnail
    isShowDetail: boolean
    link: string | null
}

export default Work
