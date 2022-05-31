import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "chartColumn",
  initialState: [
    {
      id: 1,
      text: "TODAY'S VISITORS",
      total: 24599,
      unit: "",
      percentages: [20, 45, 30, 80, 75],
      date: ["MON", "TUE", "WED", "THU", "FRI"],
      percentageColor: ["#f65250", "#51d467", "#fcd518", "#31c8dd", "#f78053"],
    },
    {
      id: 2,
      text: "YESTERDAY'S VISITORS",
      total: 15699,
      unit: "",
      percentages: [20, 45, 30, 80, 75],
      date: ["MON", "TUE", "WED", "THU", "FRI"],
      percentageColor: ["#f65250", "#51d467", "#fcd518", "#31c8dd", "#f78053"],
    },
    {
      id: 3,
      text: "TOTAL DOWNLOADS",
      total: 124599,
      unit: "",
      percentages: [20, 45, 30, 80, 75],
      date: ["MON", "TUE", "WED", "THU", "FRI"],
      percentageColor: ["#f65250", "#51d467", "#fcd518", "#31c8dd", "#f78053"],
    },
    {
      id: 4,
      text: "CURRENT INCOME",
      total: 54599,
      unit: "",
      percentages: [20, 45, 30, 80, 75],
      date: ["MON", "TUE", "WED", "THU", "FRI"],
      percentageColor: ["#f65250", "#51d467", "#fcd518", "#31c8dd", "#f78053"],
    },
  ],
  reducers: {},
});
export default slice;
