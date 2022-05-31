import { createSelector } from "@reduxjs/toolkit";

const profileSelector = (state) => {
  return state.profile;
};

const profileSelectorRemaining = createSelector(profileSelector, (profile) => {
  return profile;
});

export default profileSelectorRemaining;
