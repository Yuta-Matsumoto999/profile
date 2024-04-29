import Work from '../../types/work'

class ShowFactory {
    create(item: any): Work {
        return item
    }
}

export default ShowFactory
