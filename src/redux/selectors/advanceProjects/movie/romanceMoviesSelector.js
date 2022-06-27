import { createSelector } from "@reduxjs/toolkit";

const romanceMoviesSelector = (state) => {
  return state.advanceProjects_romanceMovies;
};

const romanceMoviesSelectorRemaining = createSelector(
  romanceMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default romanceMoviesSelectorRemaining;
