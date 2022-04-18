import Client from "shopify-buy";
import { createApi } from "unsplash-js";

const client = Client.buildClient({
  domain: `${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}`,
  storefrontAccessToken: `${process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN}`,
});
const unsplash = createApi({
  accessKey: `${process.env.NEXT_PUBLIC_UNSPLASH_AK}`,
});

export { client, unsplash };
