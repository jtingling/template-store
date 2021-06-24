import { client } from '../index'

async function getAllProducts(pageSize = 100) {
    const response = await client.product.fetchAll(pageSize); //page size
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