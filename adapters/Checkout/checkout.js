import {client} from '../index';

const createCheckout = async () => {
    const checkout = await client.checkout.create();
    return checkout;
}

const getCheckout = async (checkoutId) => {
    const response = await client.checkout.fetch(checkoutId);
    return checkout
}

const setCheckout = async () => {
    let checkout = false;
    try {
        checkout = window.localStorage.getItem("cart");
        if (checkout) {
            return checkout;
        } else {
            checkout = await createCheckout();
            checkout = JSON.parse(JSON.stringify(checkout))
            window.localStorage.setItem("cart", checkout.id );
        }
    } catch (err) {
        console.log(err)
    }
    return cart
}
export { createCheckout, getCheckout, setCheckout };