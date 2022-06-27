import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "MovieDetail",
  initialState: {
    url: "",
    title: "",
    rating: "",
    popularity: "",
    releaseDate: "",
    note: "",
    overview: "",
    smart: "",
    isSelect: false,
  },
  reducers: {
    closeDetail: (state, action) => {
      const currentState = {
        ...state,
        url: "",
        title: "",
        rating: "",
        popularity: "",
        releaseDate: "",
        note: "",
        overview: "",
        smart: "",
        isSelect: false,
      };
      return currentState;
    },
    showDetail: (state, action) => {
      const currentState = {
        ...state,
        url: action.payload.backdrop_path,
        title: action.payload.title,
        rating: action.payload.vote_count,
        popularity: action.payload.popularity,
        releaseDate: action.payload.release_date,
        note: action.payload.adult ? "18+" : "Healthy",
        overview: action.payload.overview,
        smart: action.payload.vote_average,
        isSelect: true,
      };
      return currentState;
    },
  },
  extraReducers: {},
});

export default slice;
