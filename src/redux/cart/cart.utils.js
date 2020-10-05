export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(({ id }) => id === cartItemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) => {
      if (item.id === existingItem.id) {
        return {
          ...existingItem,
          quantity: item.quantity + 1,
        };
      }

      return { ...item };
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
