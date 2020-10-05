import { CartActionTypes } from './cart.types';

const {
  TOGGLE_CART,
  ADD_ITEM,
} = CartActionTypes;

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
