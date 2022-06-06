import { createSelector } from "@reduxjs/toolkit";

const mediaPlayerSelector = (state) => {
  return state.mediaPlayer.filter((item) => item.select === true);
};

const mediaPlayerSelectorRemaining = createSelector(
  mediaPlayerSelector,
  (mediaPlayer) => {
    return mediaPlayer;
  }
);

export default mediaPlayerSelectorRemaining;
