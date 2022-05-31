import { configureStore } from "@reduxjs/toolkit";
import chartBarSlice from "../slices/chartBar/chartBarSlice";
import chartColumnSlice from "../slices/chartColumn/chartColumnSlice";
import profileSlice from "../slices/profile/profileSlice";
import socialBlockSlice from "../slices/socialBlock/socialBlockSlice";
import personSlice from "../slices/person/personSlice";
import shopBlockSlice from "../slices/shopBlock/shopBlockSlice";
import electronicShopSlice from "../slices/electronicShop/electronicShopSlice";
const reduxStore = configureStore({
  reducer: {
    chartBar: chartBarSlice.reducer,
    profile: profileSlice.reducer,
    socialBlock: socialBlockSlice.reducer,
    chartColumn: chartColumnSlice.reducer,
    person: personSlice.reducer,
    shopBlock: shopBlockSlice.reducer,
    electronicShop: electronicShopSlice.reducer,
  },
});

export { reduxStore };
