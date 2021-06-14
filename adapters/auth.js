import Client from 'shopify-buy';

module.exports = Client.buildClient({
    domain: process.env.SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.SHOPIFY_TOKEN
})
