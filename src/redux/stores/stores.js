import { configureStore } from "@reduxjs/toolkit";
import chartBarSlice from "../slices/session1/chartBar/chartBarSlice";
import chartColumnSlice from "../slices/session1/chartColumn/chartColumnSlice";
import profileSlice from "../slices/session1/profile/profileSlice";
import socialBlockSlice from "../slices/session1/socialBlock/socialBlockSlice";
import personSlice from "../slices/session1/person/personSlice";
import shopBlockSlice from "../slices/session1/shopBlock/shopBlockSlice";
import electronicShopSlice from "../slices/session1/electronicShop/electronicShopSlice";

/*****SESSION2*******/
import musicPlayerSlice from "../slices/session2/musicPlayer/musicPlayerSlice";
import mediaPlayerSlice from "../slices/session2/musicPlayer/mediaPlayerSlice";
/*****simpleProjects*******/

import musicSlice from "../slices/simpleProjects/musicPlayer/musicSlice";
import mediaSlice from "../slices/simpleProjects/musicPlayer/mediaSlice";

const reduxStore = configureStore({
  reducer: {
    chartBar: chartBarSlice.reducer,
    profile: profileSlice.reducer,
    socialBlock: socialBlockSlice.reducer,
    chartColumn: chartColumnSlice.reducer,
    person: personSlice.reducer,
    shopBlock: shopBlockSlice.reducer,
    electronicShop: electronicShopSlice.reducer,
    /*Sesion2*/
    musicPlayer: musicPlayerSlice.reducer,
    mediaPlayer: mediaPlayerSlice.reducer,
    simpleProjects_musicPlayer: musicSlice.reducer,
    simpleProjects_mediaPlayer: mediaSlice.reducer,
  },
});

export { reduxStore };
