import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mediaPlayer",
  initialState: [
    {
      id: 1,
      index: 1,
      avatar: "aiChungTinhDuocMai",
      audioName: "Ai Chung Tình Được Mãi",
      author: "Đình Dũng",
      duration: "00:05:48",
      timer: 5 * 60 + 48,
      iconHeartColor: "#f75253",
      select: true,
    },
    {
      id: 2,
      index: 2,
      avatar: "anhKhongThaThu",
      audioName: "Anh Không Tha Thứ",
      author: "Đình Dũng",
      duration: "00:04:34",
      timer: 4 * 60 + 34,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 3,
      index: 3,
      avatar: "anhThuongEmConNonDai",
      audioName: "Anh Thương Em Còn Non Dại",
      author: "Đình Dũng",
      duration: "00:04:54",
      timer: 4 * 60 + 54,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 4,
      index: 4,
      avatar: "banDuyen",
      audioName: "Bán Duyên",
      author: "Đình Dũng",
      duration: "00:04:25",
      timer: 4 * 60 + 25,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 5,
      index: 5,
      avatar: "cauHenCauThe",
      audioName: "Câu Hẹn Câu Thề",
      author: "Đình Dũng",
      duration: "00:05:20",
      timer: 5 * 60 + 20,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 6,
      index: 6,
      avatar: "damCuoiNha",
      audioName: "Đám Cưới Nha",
      author: "Hồng Thanh & DjMie",
      duration: "00:02:54",
      timer: 2 * 60 + 54,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 7,
      index: 7,
      avatar: "deVuong",
      audioName: "Đế Vương",
      author: "Đình Dũng",
      duration: "00:04:22",
      timer: 4 * 60 + 22,
      iconHeartColor: "#f75253",
      select: false,
    },
    {
      id: 8,
      index: 8,
      avatar: "tungThuong",
      audioName: "Từng Thương",
      author: "Duy Anh",
      duration: "00:04:10",
      timer: 4 * 60 + 10,
      iconHeartColor: "#f75253",
      select: false,
    },
  ],

  reducers: {
    saveEdit: (state, action) => {
      console.log(action.payload.id);
      const musicSelector = state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.select = true;
        } else {
          item.select = false;
        }
      });
      return musicSelector;
    },
    backClick: (state, action) => {
      console.log(action.payload);
      const musicSelector = state.forEach((item) => {
        if (item.id === action.payload) {
          item.select = true;
        } else {
          item.select = false;
        }
      });
      return musicSelector;
    },
  },
});
export default slice;
