import { client } from "../index";

const createCheckout = async () => {
  return await client.checkout.create();
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
  try {
    let cart = await createCheckout();
    window.localStorage.setItem("cart", cart);
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
  if (!window.localStorage) throw new Error("Browser unsupported.");
  let cartId = window.localStorage.getItem("cart");
  if (!cartId) {
    await initCheckout();
  }
  return window.localStorage.getItem("cart");
};
export { getCheckout, getCartFromStorage, initCheckout, buyNow };
