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
    let cart = window.localStorage.getItem("cart");
    try {
        if (!cart) {
            cart = await createCheckout();
            window.localStorage.setItem("cart", cart.id );
        }
    } catch (err) {
        console.log(err)
    }
}

const getCartIdFromStorage = async () => {
    let cartId = window.localStorage.getItem("cart");
    if (!cartId) {
        await initCheckout();
    }
    return cartId;
}
export { getCheckout, getCartIdFromStorage, initCheckout };