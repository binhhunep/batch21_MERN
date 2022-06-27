import { createSelector } from "@reduxjs/toolkit";

const actionMoviesSelector = (state) => {
  return state.advanceProjects_actionMovies;
};

const actionMoviesSelectorRemaining = createSelector(
  actionMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default actionMoviesSelectorRemaining;
