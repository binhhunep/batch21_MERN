import { createSelector } from "@reduxjs/toolkit";

const searchMoviesSelector = (state) => {
  return state.advanceProjects_searchMovies;
};

const searchMoviesSelectorRemaining = createSelector(
  searchMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default searchMoviesSelectorRemaining;
