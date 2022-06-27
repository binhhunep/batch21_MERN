import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mediaVPlayer",
  initialState: [
    {
      id: 1,
      avatar: "images/session2/musicPlayer/aiChungTinhDuocMai.jpg",
      url: "videos/session2/videoPlayer/vuMonQuan.mp4",
      audioName: "Vũ Môn Quan",
      author: "Raper",
      duration: "4:03",
      timer: 4 * 60 + 3,
      iconHeartColor: "#f75253",
      select: true,
      play: false,
    },
    {
      id: 2,
      avatar: "images/session2/musicPlayer/anhKhongThaThu.jpg",
      url: "videos/session2/videoPlayer/howYouLikeThat.mp4",
      audioName: "How You Like That",
      author: "BlackPink",
      duration: "03:03",
      timer: 3 * 60 + 3,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 3,
      avatar: "images/session2/musicPlayer/anhThuongEmConNonDai.jpg",
      url: "videos/session2/videoPlayer/killThisLove.mp4",
      audioName: "Kill This Love",
      author: "BlackPink",
      duration: "03:45",
      timer: 3 * 60 + 45,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 4,
      avatar: "images/session2/musicPlayer/banDuyen.jpg",
      url: "videos/session2/videoPlayer/loveSickGirl.mp4",
      audioName: "LoveSick Girls",
      author: "BlackPink",
      duration: "03:21",
      timer: 3 * 60 + 21,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 5,
      avatar: "images/session2/musicPlayer/cauHenCauThe.jpg",
      url: "videos/session2/videoPlayer/lalisa.mp4",
      audioName: "Lalisa",
      author: "Lisa",
      duration: "03:26",
      timer: 3 * 60 + 26,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 6,
      avatar: "images/session2/musicPlayer/damCuoiNha.jpg",
      url: "videos/session2/videoPlayer/money.mp4",
      audioName: "Money",
      author: "Lisa",
      duration: "02:50",
      timer: 2 * 60 + 50,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 7,
      avatar: "images/session2/musicPlayer/deVuong.jpg",
      url: "videos/session2/videoPlayer/prettySavage.mp4",
      audioName: "PrettySavage",
      author: "BlackPink",
      duration: "03:53",
      timer: 3 * 60 + 53,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 8,
      avatar: "images/session2/musicPlayer/tungThuong.jpg",
      url: "videos/session2/videoPlayer/dduDdu.mp4",
      audioName: "Ddu Ddu Ddu",
      author: "BlackPink",
      duration: "04:02",
      timer: 4 * 60 + 2,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
  ],

  reducers: {
    play: (state, action) => {
      const mediaSelector = state.forEach((item) => {
        if (item.id === action.payload) {
          item.play = true;
        } else {
          item.play = false;
        }
      });
      return mediaSelector;
    },
    pause: (state, action) => {
      const mediaSelector = state.forEach((item) => {
        if (item.id === action.payload) {
          item.select = true;
        } else {
          item.select = false;
        }
        item.play = false;
      });
      return mediaSelector;
    },

    changeSong: (state, action) => {
      const mediaSelector = state.forEach((item) => {
        if (item.id === action.payload) {
          item.select = true;
        } else {
          item.select = false;
        }
        item.play = true;
      });
      return mediaSelector;
    },
    shuffle: (state, action) => {
      const mediaSelector = state.forEach((item) => {
        if (item.id === action.payload) {
          item.select = true;
        } else {
          item.select = false;
        }
        item.play = true;
      });
      return mediaSelector;
    },
    playChange: (state, action) => {
      const mediaSelector = state.forEach((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.select === false) {
            item.play = true;
            item.select = true;
          } else {
            item.play = false;
          }
        } else {
          item.play = false;
          item.select = false;
        }
      });
      return mediaSelector;
    },
  },
});
export default slice;
