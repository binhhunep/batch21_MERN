import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRomanceMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getRomanceMovies = createAsyncThunk(
  "slice/getRomanceMovies",
  async (params, thunkAPI) => {
    const res = await getRomanceMoviesService()
      .then(function (response) {
        return response.data.results;
      })
      .catch(function (error) {
        return error;
      });
    return res;
  }
);

const slice = createSlice({
  name: "getRomanceMovies",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      console.log(action.payload);
      const romanceMovies = action.payload;
      return romanceMovies;
    },
  },
  extraReducers: {
    [getRomanceMovies.pending]: (state) => {
      state.loading = true;
    },
    [getRomanceMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getRomanceMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
