import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "videoPlayer",
  initialState: [
    {
      id: 1,
      index: 1,
      avatar: "images/session2/videoPlayer/1.jpg",
      audioName: "Vũ Môn Quan",
      author: "Raper",
      duration: "4:03",
      timer: 4 * 60 + 3,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 2,
      index: 2,
      avatar: "images/session2/videoPlayer/2.jpg",
      audioName: "How You Like That",
      author: "BlackPink",
      duration: "03:03",
      timer: 3 * 60 + 3,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 3,
      index: 3,
      avatar: "images/session2/videoPlayer/3.jpg",
      audioName: "Kill This Love",
      author: "BlackPink",
      duration: "03:45",
      timer: 3 * 60 + 45,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 4,
      index: 4,
      avatar: "images/session2/videoPlayer/4.jpg",
      audioName: "LoveSick Girls",
      author: "BlackPink",
      duration: "03:21",
      timer: 3 * 60 + 21,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 5,
      index: 5,
      avatar: "images/session2/videoPlayer/5.jpg",
      audioName: "Lalisa",
      author: "Lisa",
      duration: "03:26",
      timer: 3 * 60 + 26,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 6,
      index: 6,
      avatar: "images/session2/videoPlayer/6.jpg",
      audioName: "Money",
      author: "Lisa",
      duration: "02:50",
      timer: 2 * 60 + 50,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 7,
      index: 7,
      avatar: "images/session2/videoPlayer/7.jpg",
      audioName: "PrettySavage",
      author: "BlackPink",
      duration: "03:53",
      timer: 3 * 60 + 53,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 8,
      index: 8,
      avatar: "images/session2/videoPlayer/8.jpg",
      audioName: "Ddu Ddu Ddu",
      author: "BlackPink",
      duration: "04:02",
      timer: 4 * 60 + 2,
      iconHeartColor: "#f75253",
      select: false,
    },
  ],
  reducers: {
    play: (state, action) => {
      const videoSelector = state.forEach((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.select === false) {
            item.select = true;
          } else {
            item.select = false;
          }
        } else {
          item.select = false;
        }
      });

      return videoSelector;
    },
    pause: (state, action) => {
      const videoSelector = state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.select = false;
        }
      });

      return videoSelector;
    },
    playMedia: (state, action) => {
      const videoSelector = state.forEach((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.select === true) {
            item.select = !item.select;
          } else {
            item.select = false;
          }
        }
      });

      return videoSelector;
    },
    shuffleMedia: (state, action) => {
      const videoSelector = state.forEach((item) => {
        if (item.id === action.payload) {
          if (item.select === false) {
            item.select = true;
          } else {
            item.select = false;
          }
        } else {
          item.select = false;
        }
      });

      return videoSelector;
    },
  },
});
export default slice;
