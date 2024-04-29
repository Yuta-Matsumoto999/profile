import Post from '../../types/post'
import ListFactory from '../factory/listFactory'
import { client } from '@/services/client'
import { hasUncaughtExceptionCaptureCallback } from 'process'

class ListRepository {
    async get(): Promise<Post[]> {
        try {
            const res = await client.get({ endpoint: 'blogs' })
            const factory = new ListFactory()
            let postList: Post[] = []
            res.contents.map((item: any) => {
                postList.push(factory.create(item))
            })

            return postList
        } catch (e) {
            // 取得できなければexception
            throw hasUncaughtExceptionCaptureCallback
        }
    }
}

export default ListRepository
