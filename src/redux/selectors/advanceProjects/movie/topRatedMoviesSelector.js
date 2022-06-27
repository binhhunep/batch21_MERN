import { createSelector } from "@reduxjs/toolkit";

const topRatedMoviesSelector = (state) => {
  return state.advanceProjects_topRatedMovies;
};

const topRatedMoviesSelectorRemaining = createSelector(
  topRatedMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default topRatedMoviesSelectorRemaining;
