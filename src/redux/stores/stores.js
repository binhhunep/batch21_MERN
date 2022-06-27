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
import videoSlice from "../slices/simpleProjects/videoPlayer/videoSlice";
import mediaVSlice from "../slices/simpleProjects/videoPlayer/mediaVSlice";

/*****advanceProjects*******/
import netFlexOriginalsSlice from "../slices/advanceProjects/movie/netFlexOriginalsSlice";
import actionMoviesSlice from "../slices/advanceProjects/movie/actionMoviesSlice";
import comedyMoviesSlice from "../slices/advanceProjects/movie/comedyMoviesSlice";
import horrorMoviesSlice from "../slices/advanceProjects/movie/horrorMoviesSlice";
import romanceMoviesSlice from "../slices/advanceProjects/movie/romanceMoviesSlice";
import topRatedMoviesSlice from "../slices/advanceProjects/movie/topRatedMoviesSlice";
import documentariesSlice from "../slices/advanceProjects/movie/documentariesSlice";
import trendingMoviesSlice from "../slices/advanceProjects/movie/trendingMoviesSlice";
import movieDetailSlice from "../slices/advanceProjects/movieDetail/movieDetailSlice";
const reduxStore = configureStore({
  reducer: {
    /*Sesion1*/
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
    /*Project*/
    simpleProjects_musicPlayer: musicSlice.reducer,
    simpleProjects_mediaPlayer: mediaSlice.reducer,
    simpleProjects_videoPlayer: videoSlice.reducer,
    simpleProjects_mediaVPlayer: mediaVSlice.reducer,
    advanceProjects_netFlexOriginals: netFlexOriginalsSlice.reducer,
    advanceProjects_trendingMovies: trendingMoviesSlice.reducer,
    advanceProjects_comedyMovies: comedyMoviesSlice.reducer,
    advanceProjects_actionMovies: actionMoviesSlice.reducer,
    advanceProjects_horrorMovies: horrorMoviesSlice.reducer,
    advanceProjects_romanceMovies: romanceMoviesSlice.reducer,
    advanceProjects_topRatedMovies: topRatedMoviesSlice.reducer,
    advanceProjects_documentaries: documentariesSlice.reducer,
    advanceProjects_movieDetail: movieDetailSlice.reducer,
  },
});

export { reduxStore };
