import { CartActionTypes } from './cart.types';
import { addItemToCart, deleteItemById, removeItemFromCart } from './cart.utils';

const {
  TOGGLE_CART,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} = CartActionTypes;

const INITIAL_STATE = {
  isCartOpened: false,
  cartItems: [],
};

const actionTypes = {
  [TOGGLE_CART]: (state) => ({
    ...state,
    isCartOpened: !state.isCartOpened,
  }),
  [ADD_ITEM]: (state, payload) => ({
    ...state,
    cartItems: addItemToCart(state.cartItems, payload),
  }),
  [REMOVE_ITEM]: (state, payload) => ({
    ...state,
    cartItems: removeItemFromCart(state.cartItems, payload),
  }),
  [CLEAR_ITEM_FROM_CART]: (state, { id }) => ({
    ...state,
    cartItems: deleteItemById(state.cartItems, id),
  }),
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  const action = actionTypes[type];

  if (!action) {
    return state;
  }

  return action(state, payload);
};

export default cartReducer;
