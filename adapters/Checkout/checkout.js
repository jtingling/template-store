import {client} from '../index';

const createCheckout = async () => {
    const checkout = await client.checkout.create();
    return checkout;
}

const getCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    return checkout.id
}
export { createCheckout, getCheckout };