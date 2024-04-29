import Work from '../../types/work'
import ListFactory from '../factory/listFactory'
import { client } from '@/services/client'
import { hasUncaughtExceptionCaptureCallback } from 'process'

class ListRepository {
    async get(): Promise<Work[]> {
        try {
            const res = await client.get({ endpoint: 'works' })
            const factory = new ListFactory()
            let workList: Work[] = []
            res.contents.map((item: any) => {
                workList.push(factory.create(item))
            })

            return workList
        } catch (e) {
            // 取得できなければexception
            throw hasUncaughtExceptionCaptureCallback
        }
    }
}

export default ListRepository
