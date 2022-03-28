import { client } from "../index";

const createCheckout = async () => {
  const checkout = await client.checkout.create();
  return checkout.id;
};

const getCheckout = async (checkoutId) => {
  const checkout = await client.checkout.fetch(checkoutId);
  return checkout;
};

const initCheckout = async () => {
  try {
    let cart = await createCheckout();
    window.localStorage.setItem("cart", cart);
  } catch (err) {
    console.log(err);
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

const getCartIdFromStorage = async () => {
  let cartId = window.localStorage.getItem("cart");
  if (!cartId) {
    await initCheckout();
  }
  return window.localStorage.getItem("cart");
};
export { getCheckout, getCartIdFromStorage, initCheckout, buyNow };
