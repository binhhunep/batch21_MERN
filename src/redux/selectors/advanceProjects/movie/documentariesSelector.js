import { createSelector } from "@reduxjs/toolkit";

const documentariesSelector = (state) => {
  return state.advanceProjects_documentaries;
};

const documentariesSelectorRemaining = createSelector(
  documentariesSelector,
  (movie) => {
    return movie;
  }
);

export default documentariesSelectorRemaining;
