import { configureStore } from "@reduxjs/toolkit";
import chartBarSlice from "../slices/session1/chartBar/chartBarSlice";
import chartColumnSlice from "../slices/session1/chartColumn/chartColumnSlice";
import profileSlice from "../slices/session1/profile/profileSlice";
import socialBlockSlice from "../slices/session1/socialBlock/socialBlockSlice";
import personSlice from "../slices/session1/person/personSlice";
import shopBlockSlice from "../slices/session1/shopBlock/shopBlockSlice";
import electronicShopSlice from "../slices/session1/electronicShop/electronicShopSlice";
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
