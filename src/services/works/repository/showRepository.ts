import Work from '../../types/work'
import ShowFactory from '../factory/showFactory'
import { client } from '@/services/client'
import { hasUncaughtExceptionCaptureCallback } from 'process'

class ShowRepository {
    async get(id: string): Promise<Work> {
        try {
            const res = await client.get({
                endpoint: 'works',
                queries: {
                    filters: `id[equals]${id}`,
                },
            })
            const factory = new ShowFactory()
            return factory.create(res.contents[0])
        } catch (e) {
            // 取得できなければexception
            throw hasUncaughtExceptionCaptureCallback
        }
    }
}

export default ShowRepository
