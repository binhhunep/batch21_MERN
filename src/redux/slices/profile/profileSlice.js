import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "profile",
  initialState: [
    {
      id: 1,
      name: "fa-solid fa-robot",
      title: "HTML",
      titleColor: "#51d567",
      followers: "60",
    },
    {
      id: 2,
      name: "fa-brands fa-apple",
      title: "CSS",
      titleColor: "#f75253",
      followers: "50",
    },
    {
      id: 3,
      name: "fa-brands fa-python",
      title: "PHP",
      titleColor: "#31c8dd",
      followers: "30",
    },
    {
      id: 4,
      name: "fa-brands fa-java",
      title: "java",
      titleColor: "#fcd518",
      followers: "70",
    },
    {
      id: 5,
      name: "fa-brands fa-battle-net",
      title: ".Net",
      titleColor: "#ea59d3",
      followers: "40",
    },
  ],
  reducers: {},
});
export default slice;
