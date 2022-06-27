import { createSelector } from "@reduxjs/toolkit";

const actionMoviesSelector = (state) => {
  return state.advanceProjects_movieDetail;
};

const movieDetailSelectorRemaining = createSelector(
  actionMoviesSelector,
  (movie) => {
    return movie;
  }
);
export default movieDetailSelectorRemaining;
