import { getAllProducts } from '../../adapters/index'

const getProductByType = async (productType) => {
    const products = await getAllProducts();

    switch(productType) {
        case "SHOES":
            return products.filter(product => product.productType === "SHOES" );
        case "ACCESSORIES":
            return products.filter((product) => { return product.productType === "ACCESSORIES"});
        case "PAINTINGS":
            return products.filter((product) => { return product.productType === "PAINTINGS"});
        default:
            return "Category not found"
    }
}

export { getProductByType };