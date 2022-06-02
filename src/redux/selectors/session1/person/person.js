import { createSelector } from "@reduxjs/toolkit";

const personSelector = (state) => {
  return state.person;
};

const personSelectorRemaining = createSelector(personSelector, (chartColum) => {
  return chartColum;
});

export default personSelectorRemaining;
