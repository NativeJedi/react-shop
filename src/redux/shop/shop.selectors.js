import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections,
);

export const selectShopCollectionValues = createSelector(
  [selectShop],
  ({ collections }) => collections.values(),
);

export const selectShopCollection = memoize((collectionUrl) => createSelector(
  [selectShopCollections],
  (collections) => collections.get(collectionUrl),
));
