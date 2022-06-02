import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "chartBar",
  initialState: [
    {
      id: 1,
      isEditClick: false,
      title: "BANDWIDTH",
      titleColor: "#e54d4c",
      percentage: "20",
      percentageColor: "#f75253",
    },
    {
      id: 2,
      isEditClick: false,
      title: "STORAGE",
      titleColor: "#2db8cd",
      percentage: "50",
      percentageColor: "#31c8dd",
    },
    {
      id: 3,
      isEditClick: false,
      title: "USERS",
      titleColor: "#4ac25e",
      percentage: "70",
      percentageColor: "#51d567",
    },
    {
      id: 4,
      isEditClick: false,
      title: "VISITORS",
      titleColor: "#e9c318",
      percentage: "30",
      percentageColor: "#fcd518",
    },
    {
      id: 5,
      isEditClick: false,
      title: "BASIC",
      titleColor: "#ea59d3",
      percentage: "80",
      percentageColor: "#fe60e8",
    },
    {
      id: 6,
      isEditClick: false,
      title: "BEMAILS",
      titleColor: "#bb70d5",
      percentage: "45",
      percentageColor: "#cb79e7",
    },
    {
      id: 7,
      isEditClick: false,
      title: "OTHERS",
      titleColor: "#5890da",
      percentage: "37",
      percentageColor: "#619cec",
    },
  ],
  reducers: {
    addChartBar: (state, action) => {
      state.push(action.payload);
    },
    isEditClick: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.isEditClick = !item.isEditClick;
        } else {
          item.isEditClick = item.isEditClick;
        }
      });
    },
    saveEdit: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.percentage = action.payload.percentage;
          item.percentageColor = action.payload.percentageColor;
          item.title = action.payload.title;
          item.titleColor = action.payload.titleColor;
        }
      });
    },
    delete: (state, action) => {
      const currentCharBars = state.filter(
        (item) => item.id !== action.payload.id
      );
      return currentCharBars;
    },
  },
});
export default slice;
