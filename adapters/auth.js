import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'xxteststore.myshopify.com',
    storefrontAccessToken: '6cb0345be9a9d6bc63133406d1dadf51'
})
export { client }
