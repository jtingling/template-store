import { client } from "../index";

const createCheckout = async () => {
  const checkout = await client.checkout.create();
  return checkout;
};

const getCheckout = async (checkoutId) => {
  let checkout;
  try {
    checkout = await client.checkout.fetch(checkoutId);
    console.log(checkout);
    if (!checkout) {
      throw new Error("Problem fetching checkout API.");
    }
  } catch (e) {
    console.error(e);
  }

  return checkout;
};

const initCheckout = async () => {
  let cartId = window.localStorage.getItem("cart");
  if (cartId) return await getCheckout(cartId);
  try {
    let cart = await createCheckout();
    window.localStorage.setItem("cart", cart.id);
    return await getCheckout(cart.id);
  } catch (err) {
    console.error(err);
  }
};

const buyNow = async (variantId) => {
  let newCheckout;
  await client.checkout.create().then((checkout) => {
    newCheckout = checkout;
  });
  const itemsToAdd = {
    variantId: variantId,
    quantity: 1,
  };
  await client.checkout.addLineItems(newCheckout.id, itemsToAdd);
  return window.location.replace(newCheckout.webUrl);
};

const getCartFromStorage = async () => {
  let storage = window.localStorage;
  if (!storage) throw new Error("Browser unsupported.");
  return await initCheckout();
};
export { getCheckout, getCartFromStorage, initCheckout, buyNow };
