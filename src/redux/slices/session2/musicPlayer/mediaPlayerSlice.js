import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mediaPlayer",
  initialState: {
    index: 1,
    avatar: "aiChungTinhDuocMai",
    audioName: "Ai Chung Tinh Duoc Mai",
    author: "Dinh Dung",
    duration: "00:05:48",
    iconHeartColor: "#f75253",
  },

  reducers: {
    saveEdit: (state, action) => {
      state = action.payload;
      console.log("state", state);
      return state;
    },
  },
});
export default slice;
