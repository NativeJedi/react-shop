import { CartActionTypes } from './cart.types';

const { TOGGLE_CART } = CartActionTypes;

export const toggleCart = () => ({
  type: TOGGLE_CART,
});
