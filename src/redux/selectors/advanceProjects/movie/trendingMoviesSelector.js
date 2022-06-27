import { createSelector } from "@reduxjs/toolkit";

const trendingMoviesSelector = (state) => {
  return state.advanceProjects_trendingMovies;
};

const trendingMoviesSelectorRemaining = createSelector(
  trendingMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default trendingMoviesSelectorRemaining;
