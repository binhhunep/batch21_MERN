import { createSelector } from "@reduxjs/toolkit";

const socialBlockSelector = (state) => {
  return state.socialBlock;
};

const socialBlockSelectorRemaining = createSelector(
  socialBlockSelector,
  (socialBlock) => {
    return socialBlock;
  }
);

export default socialBlockSelectorRemaining;
