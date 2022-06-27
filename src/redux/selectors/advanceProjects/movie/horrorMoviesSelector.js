import { createSelector } from "@reduxjs/toolkit";

const horrorMoviesSelector = (state) => {
  return state.advanceProjects_horrorMovies;
};

const horrorMoviesSelectorRemaining = createSelector(
  horrorMoviesSelector,
  (movie) => {
    return movie;
  }
);

export default horrorMoviesSelectorRemaining;
