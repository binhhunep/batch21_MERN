import { createSelector } from "@reduxjs/toolkit";

const musicSelector = (state) => {
  return state.simpleProjects_musicPlayer;
};

const musicSelectorRemaining = createSelector(musicSelector, (musicPlayer) => {
  return musicPlayer;
});

export default musicSelectorRemaining;
