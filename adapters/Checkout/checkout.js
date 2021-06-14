import client from '../index';

const createCheckout = async () => {
    const checkout = await client.checkout.create();
    return checkout.id;
}

module.exports = createCheckout