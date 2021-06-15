import client from '../index'

const addItemToCart = async (checkoutId, items) => {
    await client.checkout.addLineItems(checkoutId, items);
    return `${items.length} item(s) added to cart.`
}

const removeItemFromCart = async (checkoutId, items) => {
    await client.checkout.removeLineItems(checkoutId, items);
    return `${items.length} item(s) removed to cart.`
}

const updateCart = async (checkoutId, items) => {
    await client.checkout.updateLineItems(checkoutId, items);
    return `Cart updated.`
}

export { addItemToCart, removeItemFromCart, updateCart };