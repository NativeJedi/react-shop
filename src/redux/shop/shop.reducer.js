import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
};

const actionTypes = {
  [ShopActionTypes.SET_COLLECTIONS]: (state, payload) => ({
    ...state,
    collections: payload,
  }),
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  const action = actionTypes[type];

  if (!action) {
    return state;
  }

  return action(state, payload);
};

export default shopReducer;
