import Tag from './tag'
import Thumbnail from './thumbnail'

interface Post {
    id: string
    title: string
    content: string
    updatedAt: string
    thumbnail: Thumbnail
    tags: Tag[]
}

export default Post
