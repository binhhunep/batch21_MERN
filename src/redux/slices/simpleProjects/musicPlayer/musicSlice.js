import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "musicPlayer",
  initialState: [
    {
      id: 1,
      index: 1,
      avatar: "images/session2/musicPlayer/aiChungTinhDuocMai.jpg",
      audioName: "Ai Chung Tình Được Mãi",
      author: "Đình Dũng",
      duration: "05:48",
      timer: 5 * 60 + 48,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 2,
      index: 2,
      avatar: "images/session2/musicPlayer/anhKhongThaThu.jpg",
      audioName: "Anh Không Tha Thứ",
      author: "Đình Dũng",
      duration: "04:34",
      timer: 4 * 60 + 34,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 3,
      index: 3,
      avatar: "images/session2/musicPlayer/anhThuongEmConNonDai.jpg",
      audioName: "Anh Thương Em Còn Non Dại",
      author: "Đình Dũng",
      duration: "04:54",
      timer: 4 * 60 + 54,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 4,
      index: 4,
      avatar: "images/session2/musicPlayer/banDuyen.jpg",
      audioName: "Bán Duyên",
      author: "Đình Dũng",
      duration: "04:25",
      timer: 4 * 60 + 25,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 5,
      index: 5,
      avatar: "images/session2/musicPlayer/cauHenCauThe.jpg",
      audioName: "Câu Hẹn Câu Thề",
      author: "Đình Dũng",
      duration: "05:20",
      timer: 5 * 60 + 20,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 6,
      index: 6,
      avatar: "images/session2/musicPlayer/damCuoiNha.jpg",
      audioName: "Đám Cưới Nha",
      author: "Hồng Thanh & DjMie",
      duration: "02:54",
      timer: 2 * 60 + 54,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 7,
      index: 7,
      avatar: "images/session2/musicPlayer/deVuong.jpg",
      audioName: "Đế Vương",
      author: "Đình Dũng",
      duration: "04:22",
      timer: 4 * 60 + 22,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 8,
      index: 8,
      avatar: "images/session2/musicPlayer/tungThuong.jpg",
      audioName: "Từng Thương",
      author: "Duy Anh",
      duration: "04:10",
      timer: 4 * 60 + 10,
      iconHeartColor: "#f75253",
      select: false,
    },
  ],
  reducers: {
    play: (state, action) => {
      const musicSelector = state.forEach((item) => {
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

      return musicSelector;
    },
    playMedia: (state, action) => {
      const musicSelector = state.forEach((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.select === true) {
            item.select = !item.select;
          } else {
            item.select = false;
          }
        }
      });

      return musicSelector;
    },
    shuffleMedia: (state, action) => {
      const musicSelector = state.forEach((item) => {
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

      return musicSelector;
    },
  },
});
export default slice;
