import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDocumentariesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getDocumentaries = createAsyncThunk(
  "slice/getDocumentaries",
  async (params, thunkAPI) => {
    const res = await getDocumentariesService()
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
  name: "getDocumentaries",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      const documentaries = action.payload;
      return documentaries;
    },
  },
  extraReducers: {
    [getDocumentaries.pending]: (state) => {
      state.loading = true;
    },
    [getDocumentaries.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getDocumentaries.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
