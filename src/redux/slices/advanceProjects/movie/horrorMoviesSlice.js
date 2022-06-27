import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHorrorMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getHorrorMovies = createAsyncThunk(
  "slice/getHorrorMovies",
  async (params, thunkAPI) => {
    const res = await getHorrorMoviesService()
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
  name: "getHorrorMovies",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      console.log(action.payload);
      const horrorMovies = action.payload;
      return horrorMovies;
    },
  },
  extraReducers: {
    [getHorrorMovies.pending]: (state) => {
      state.loading = true;
    },
    [getHorrorMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getHorrorMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
