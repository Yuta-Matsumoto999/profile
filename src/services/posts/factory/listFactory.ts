import Post from '../../types/post'

class ListFactory {
    create(item: any): Post {
        return item
    }
}

export default ListFactory
