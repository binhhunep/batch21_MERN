import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mediaPlayer",
  initialState: [
    {
      id: 1,
      avatar: "images/session2/musicPlayer/aiChungTinhDuocMai.jpg",
      url: "audios/session2/musicPlayer/aiChungTinhDuocMai.mp3",
      audioName: "Ai Chung Tình Được Mãi",
      author: "Đình Dũng",
      duration: "05:48",
      timer: 5 * 60 + 48,
      iconHeartColor: "#f75253",
      select: true,
      play: false,
    },
    {
      id: 2,
      avatar: "images/session2/musicPlayer/anhKhongThaThu.jpg",
      url: "audios/session2/musicPlayer/anhKhongThaThu.mp3",
      audioName: "Anh Không Tha Thứ",
      author: "Đình Dũng",
      duration: "04:34",
      timer: 4 * 60 + 34,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 3,
      avatar: "images/session2/musicPlayer/anhThuongEmConNonDai.jpg",
      url: "audios/session2/musicPlayer/anhThuongEmConNonDai.mp3",
      audioName: "Anh Thương Em Còn Non Dại",
      author: "Đình Dũng",
      duration: "04:54",
      timer: 4 * 60 + 54,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 4,
      avatar: "images/session2/musicPlayer/banDuyen.jpg",
      url: "audios/session2/musicPlayer/banDuyen.mp3",
      audioName: "Bán Duyên",
      author: "Đình Dũng",
      duration: "04:25",
      timer: 4 * 60 + 25,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 5,
      avatar: "images/session2/musicPlayer/cauHenCauThe.jpg",
      url: "audios/session2/musicPlayer/cauHenCauThe.mp3",
      audioName: "Câu Hẹn Câu Thề",
      author: "Đình Dũng",
      duration: "05:20",
      timer: 5 * 60 + 20,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 6,
      avatar: "images/session2/musicPlayer/damCuoiNha.jpg",
      url: "audios/session2/musicPlayer/damCuoiNha.mp3",
      audioName: "Đám Cưới Nha",
      author: "Hồng Thanh & DjMie",
      duration: "02:54",
      timer: 2 * 60 + 54,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 7,
      avatar: "images/session2/musicPlayer/deVuong.jpg",
      url: "audios/session2/musicPlayer/deVuong.mp3",
      audioName: "Đế Vương",
      author: "Đình Dũng",
      duration: "04:22",
      timer: 4 * 60 + 22,
      iconHeartColor: "#f75253",
      select: false,
      play: false,
    },
    {
      id: 8,
      avatar: "images/session2/musicPlayer/tungThuong.jpg",
      url: "audios/session2/musicPlayer/tungThuong.mp3",
      audioName: "Từng Thương",
      author: "Duy Anh",
      duration: "04:10",
      timer: 4 * 60 + 10,
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
          item.play = false;
        } else {
          item.play = true;
        }
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
        item.play = false;
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
