import { SHOP_DATA } from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const actionTypes = {};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  const action = actionTypes[type];

  if (!action) {
    return state;
  }

  return action(payload);
};

export default shopReducer;
