import { createSelector } from "@reduxjs/toolkit";

const mediaSelector = (state) => {
  return state.simpleProjects_mediaPlayer.filter(
    (item) => item.select === true
  );
};

const mediaSelectorRemaining = createSelector(mediaSelector, (mediaPlayer) => {
  return mediaPlayer;
});

export default mediaSelectorRemaining;
