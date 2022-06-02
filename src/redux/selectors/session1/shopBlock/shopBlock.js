import { createSelector } from "@reduxjs/toolkit";

const shopBlockSelector = (state) => {
  return state.shopBlock;
};

const shopBlockSelectorRemaining = createSelector(
  shopBlockSelector,
  (shopBlock) => {
    return shopBlock;
  }
);

export default shopBlockSelectorRemaining;
