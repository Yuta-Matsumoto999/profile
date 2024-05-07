import { client } from '@/services/client'
import { hasUncaughtExceptionCaptureCallback } from 'process'

class IdListRepository {
    async get(): Promise<any[]> {
        try {
            const res = await client.get({
                endpoint: 'works',
                queries: {
                    fields: 'id',
                    filters: 'isShowDetail[equals]true',
                },
            })
            let idList: any = []
            res.contents.map((item: any) => {
                idList.push({
                    params: {
                        id: item.id,
                    },
                })
            })

            return idList
        } catch (e) {
            // 取得できなければexception
            throw hasUncaughtExceptionCaptureCallback
        }
    }
}

export default IdListRepository
