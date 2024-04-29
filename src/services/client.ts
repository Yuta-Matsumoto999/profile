import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: String(process.env.SERVER_URL),
    apiKey: String(process.env.API_KEY),
})
