import Post from '../../types/post'

class ShowFactory {
    create(item: any): Post {
        return item
    }
}

export default ShowFactory
