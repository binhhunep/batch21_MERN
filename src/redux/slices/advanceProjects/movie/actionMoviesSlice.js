import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActionMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getActionMovies = createAsyncThunk(
  "slice/getActionMovies",
  async (params, thunkAPI) => {
    const res = await getActionMoviesService()
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
  name: "getActionMovies",
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    showPoster: (state, action) => {
      console.log(action.payload);
      const actionMovies = action.payload;
      return actionMovies;
    },
  },
  extraReducers: {
    [getActionMovies.pending]: (state) => {
      state.loading = true;
    },
    [getActionMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getActionMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export default slice;
