import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionForPreview = createSelector(
  [selectShopCollection],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : [] // return collections for key
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollection],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => shop.collections
)
