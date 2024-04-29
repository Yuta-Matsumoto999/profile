import Work from '../../types/work'

class ListFactory {
    create(item: any): Work {
        return item
    }
}

export default ListFactory
