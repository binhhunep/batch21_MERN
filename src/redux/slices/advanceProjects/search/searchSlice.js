import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllMoviesService } from "../../../../services/advanceProjects/Getmovies/service";

export const getAllMovies = createAsyncThunk(
  "slice/getAllMovies",
  async (params, thunkAPI) => {
    const res = await getAllMoviesService(params)
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
  name: "SearchMovies",
  initialState: {
    data: [],
    loading: false,
    error: "",
    isSearchChange: false,
    search: "search",
  },
  reducers: {
    showSearchMovies: (state, action) => {
      state.isSearchChange = true;
      state.search = action.payload;
    },

    hideSearchMovies: (state, action) => {
      state.isSearchChange = false;
      state.search = "search";
    },
  },
  extraReducers: {
    [getAllMovies.pending]: (state) => {
      state.loading = true;
    },
    [getAllMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.config.message;
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default slice;
