import { createSelector } from "@reduxjs/toolkit";

const mediaVSelector = (state) => {
  return state.simpleProjects_mediaVPlayer.filter(
    (item) => item.select === true
  );
};

const mediaVSelectorRemaining = createSelector(
  mediaVSelector,
  (mediaPlayer) => {
    return mediaPlayer;
  }
);

export default mediaVSelectorRemaining;
