const findItemById = (items, searchId) => items.find(({ id }) => id === searchId);

export const deleteItemById = (items, deleteId) => items.filter(({ id }) => id !== deleteId);

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = findItemById(cartItems, cartItemToAdd.id);

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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const { id: removeId } = cartItemToRemove;

  const existingItem = findItemById(cartItems, removeId);

  if (existingItem.quantity === 1) {
    return deleteItemById(cartItems, removeId);
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id !== removeId) {
      return cartItem;
    }

    return {
      ...existingItem,
      quantity: existingItem.quantity - 1,
    };
  });
};
