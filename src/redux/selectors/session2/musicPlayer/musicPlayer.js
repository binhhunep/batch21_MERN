import { createSelector } from "@reduxjs/toolkit";

const musicPlayerSelector = (state) => {
  return state.musicPlayer;
};

const musicPlayerSelectorRemaining = createSelector(
  musicPlayerSelector,
  (musicPlayer) => {
    return musicPlayer;
  }
);

export default musicPlayerSelectorRemaining;
