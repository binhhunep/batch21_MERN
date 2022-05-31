import { createSelector } from "@reduxjs/toolkit";

const chartBarSelector = (state) => {
  return state.chartBar;
};

const chartBarSelectorRemaining = createSelector(
  chartBarSelector,
  (chartBar) => {
    return chartBar;
  }
);

export default chartBarSelectorRemaining;
