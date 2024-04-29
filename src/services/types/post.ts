import Tag from './tag'
import Thumbnail from './thumbnail'

interface Post {
    id: string
    title: string
    overview: string
    content: string
    thumbnail: Thumbnail
    tags: Tag[]
}

export default Post
