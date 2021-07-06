import {client} from '../index';

const createCheckout = async () => {
    const checkout = await client.checkout.create();
    return checkout.id;
}

const getCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    return checkout
}

const initCheckout = async () => {
    try {
        let cart = await createCheckout();
        window.localStorage.setItem("cart", cart );
    } catch (err) {
        console.log(err)
    }
}
const getCartIdFromStorage = async () => {
    let cartId = window.localStorage.getItem("cart");
    if (cartId === undefined) {
        await initCheckout();
    }
    return window.localStorage.getItem("cart");
}
export { getCheckout, getCartIdFromStorage, initCheckout };