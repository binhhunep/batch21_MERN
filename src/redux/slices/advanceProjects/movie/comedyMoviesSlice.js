import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComedyMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getComedyMovies = createAsyncThunk(
  "slice/getComedyMovies",
  async (params, thunkAPI) => {
    const res = await getComedyMoviesService()
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
  name: "getComedyMovies",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      console.log(action.payload);
      const comedyMovies = action.payload;
      return comedyMovies;
    },
  },
  extraReducers: {
    [getComedyMovies.pending]: (state) => {
      state.loading = true;
    },
    [getComedyMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getComedyMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
