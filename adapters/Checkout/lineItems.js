import { client, getCheckout } from "../index";

const addItemToCart = async (checkoutId, items) => {
  const lineItemsToAdd = [
    {
      variantId: items.id,
      quantity: 1,
      customAttributes: [
        {
          key: "price",
          value: items.price,
        },
        {
          key: "title",
          value: items.title,
        },
      ],
    },
  ];
  await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
  return await getCheckout(checkoutId);
};

const removeItemFromCart = async (checkoutId, items) => {
  await client.checkout.removeLineItems(checkoutId, items);
  return `${items.length} item(s) removed to cart.`;
};

const updateCart = async (event, checkoutId, itemId) => {
  event.preventDefault();

  const lineItemsToAdd = [
    {
      id: itemId,
      quantity: parseInt(event.target.value, 10),
    },
  ];
  if (!Number.parseInt(event.target.value)) {
    await client.checkout.removeLineItems(checkoutId, itemId);
  } else {
    await client.checkout.updateLineItems(checkoutId, lineItemsToAdd);
  }

  return await getCheckout(checkoutId);
};

export { addItemToCart, removeItemFromCart, updateCart };
