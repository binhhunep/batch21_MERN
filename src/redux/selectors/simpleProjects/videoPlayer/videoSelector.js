import { createSelector } from "@reduxjs/toolkit";

const videoSelector = (state) => {
  return state.simpleProjects_videoPlayer;
};

const videoSelectorRemaining = createSelector(videoSelector, (videoPlayer) => {
  return videoPlayer;
});

export default videoSelectorRemaining;
