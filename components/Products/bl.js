import { getAllProducts } from '../../adapters/index'

const getProductByType = async (productType, numProducts = 100) => {
    const products = await getAllProducts(numProducts);

    const items = products.filter(product => product.productType === productType)

    if (items.length === 0) {
        return "Item type not found."
    } else {
        return items;
    }
}

export { getProductByType };