import { createSelector } from 'reselect';

const selectCart = ({ cart }) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  ({ cartItems }) => cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, { quantity }) => count + quantity, 0),
);

export const selectCartIsOpened = createSelector(
  [selectCart],
  ({ isCartOpened }) => isCartOpened,
);
