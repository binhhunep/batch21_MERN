import { createSelector } from "@reduxjs/toolkit";

const mediaPlayerSelector = (state) => {
  console.log("check state.mediaPlayer", state.mediaPlayer);
  return state.mediaPlayer;
};

const mediaPlayerSelectorRemaining = createSelector(
  mediaPlayerSelector,
  (mediaPlayer) => {
    return mediaPlayer;
  }
);

export default mediaPlayerSelectorRemaining;
