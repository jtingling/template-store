export { client } from './auth'
export { createCheckout, getCheckout } from './Checkout/checkout'
export { addItemToCart, removeItemFromCart, updateCart } from '../adapters/Checkout/lineItems'
export { getAllProducts, getSingleProduct, getProductByHandle } from '../adapters/Products/products'
export { getProductCollections, getCollectionById } from '../adapters/Products/collections'


