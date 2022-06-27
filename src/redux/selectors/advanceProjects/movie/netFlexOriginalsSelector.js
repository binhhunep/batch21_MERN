import { createSelector } from "@reduxjs/toolkit";

const nextFlexSelector = (state) => {
  return state.advanceProjects_netFlexOriginals;
};

const nextFlexSelectorRemaining = createSelector(nextFlexSelector, (movie) => {
  return movie;
});

export default nextFlexSelectorRemaining;
