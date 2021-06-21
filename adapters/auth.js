import Client from 'shopify-buy';
import { createApi } from 'unsplash-js';

const client = Client.buildClient({
    domain: 'xxteststore.myshopify.com',
    storefrontAccessToken: '6cb0345be9a9d6bc63133406d1dadf51'
})
const unsplash = createApi({
    accessKey: `${process.env.UNSPLASH_AK}`
})

export { client, unsplash }
