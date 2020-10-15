import { ShopActionTypes } from './shop.types';

const {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} = ShopActionTypes;

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

const actionTypes = {
  [FETCH_COLLECTIONS_START]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [FETCH_COLLECTIONS_SUCCESS]: (state, payload) => ({
    ...state,
    collections: payload,
    isFetching: false,
    errorMessage: null,
  }),
  [FETCH_COLLECTIONS_FAILURE]: (state, payload) => ({
    ...state,
    errorMessage: payload,
    collections: null,
    isFetching: false,
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
