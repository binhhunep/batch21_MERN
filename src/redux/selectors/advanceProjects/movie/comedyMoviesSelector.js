import { createSelector } from "@reduxjs/toolkit";

const comedyMoviesSelector = (state) => {
  return state.advanceProjects_comedyMovies;
};

const comedyMoviesSelectorRemaining = createSelector(
  comedyMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default comedyMoviesSelectorRemaining;
