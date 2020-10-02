import { CartActionTypes } from './cart.types';

const { TOGGLE_CART } = CartActionTypes;

const INITIAL_STATE = {
  isCartOpened: false,
};

const actionTypes = {
  [TOGGLE_CART]: (state) => ({
    ...state,
    isCartOpened: !state.isCartOpened,
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
