import Client from "shopify-buy";
import { createApi } from "unsplash-js";

const client = Client.buildClient({
  domain: `${process.env.SHOPIFY_DOMAIN}`,
  storefrontAccessToken: `${process.env.SHOPIFY_ACCESS}`,
});
const unsplash = createApi({
  accessKey: `${process.env.UNSPLASH_AK}`,
});

export { client, unsplash };
