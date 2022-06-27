import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTrendingMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getTrendingMovies = createAsyncThunk(
  "slice/getTrendingMovie",
  async (params, thunkAPI) => {
    const res = await getTrendingMoviesService()
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
  name: "trendingMovies",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      const trendingMovies = action.payload;
      return trendingMovies;
    },
  },
  extraReducers: {
    [getTrendingMovies.pending]: (state) => {
      state.loading = true;
    },
    [getTrendingMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getTrendingMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
