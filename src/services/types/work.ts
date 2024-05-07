import Thumbnail from './thumbnail'

interface Work {
    id: string
    title: string
    overview: string
    content: string
    thumbnail: Thumbnail
    isShowDetail: boolean
    link: string
}

export default Work
