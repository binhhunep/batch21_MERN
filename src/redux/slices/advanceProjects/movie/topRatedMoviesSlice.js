import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTopRatedMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getTopRatedMovies = createAsyncThunk(
  "slice/getTopRatedMovies",
  async (params, thunkAPI) => {
    const res = await getTopRatedMoviesService()
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
  name: "topRatedMovies",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      console.log(action.payload);
      const topRatedMovies = action.payload;
      return topRatedMovies;
    },
  },
  extraReducers: {
    [getTopRatedMovies.pending]: (state) => {
      state.loading = true;
    },
    [getTopRatedMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getTopRatedMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
