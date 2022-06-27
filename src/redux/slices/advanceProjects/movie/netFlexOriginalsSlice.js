import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNetFlixOriginalsService } from "../../../../services/advanceProjects/Getmovies/service";

export const getNetFlixOriginals = createAsyncThunk(
  "slice/getNetFlixOriginals",
  async (params, thunkAPI) => {
    const res = await getNetFlixOriginalsService()
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
  name: "netFlixOriginals",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      console.log(action.payload);
      const netFlixOriginals = action.payload;
      return netFlixOriginals;
    },
  },
  extraReducers: {
    [getNetFlixOriginals.pending]: (state) => {
      state.loading = true;
    },
    [getNetFlixOriginals.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getNetFlixOriginals.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
