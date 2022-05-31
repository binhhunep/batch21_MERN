import { createSelector } from "@reduxjs/toolkit";

const chartColumnSelector = (state) => {
  return state.chartColumn;
};

const chartColumnSelectorRemaining = createSelector(
  chartColumnSelector,
  (chartColum) => {
    return chartColum;
  }
);

export default chartColumnSelectorRemaining;
