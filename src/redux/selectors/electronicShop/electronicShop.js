import { createSelector } from "@reduxjs/toolkit";

const electronicShopSelector = (state) => {
  return state.electronicShop;
};

const electronicShopSelectorRemaining = createSelector(
  electronicShopSelector,
  (electronicShop) => {
    return electronicShop;
  }
);

export default electronicShopSelectorRemaining;
