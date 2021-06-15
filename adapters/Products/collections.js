import { client } from '../index'

const getProductCollections = async () => {
    const response = await client.collection.fetchAllWithProducts();
    const collections = response.map(collection => JSON.parse(JSON.stringify(collection)))
    return collections;
}

const getCollectionById = async (collectionId) => {
    const response = await client.collection.fetchAllWithProducts(collectionId);
    const collection = JSON.parse(JSON.stringify(response))
    return collection;
}

export { getProductCollections, getCollectionById };