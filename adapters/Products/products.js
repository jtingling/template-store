import { client } from '../index'

async function getAllProducts() {
    const response = await client.product.fetchAll(100); //page size
    const products = response.map( product => JSON.parse(JSON.stringify(product)))
    return products
}

async function getSingleProduct(productId) {
    const response = await client.product.fetch(productId);
    const product = JSON.parse(JSON.stringify(response));
    return product
}

async function getProductByHandle(handle) {
    const response = await client.product.fetchByHandle(handle);
    const product = JSON.parse(JSON.stringify(response))
    return product;
}

export { getAllProducts, getSingleProduct, getProductByHandle };