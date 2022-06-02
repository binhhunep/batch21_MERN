import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "socialBlock",
  initialState: [
    {
      id: 1,
      iconSocial: "fab fa-facebook-f",
      colorSocial: "#619cec",
      titleSocial: "Facebook",
      textSocial: "500.000 likes",
    },
    {
      id: 2,
      iconSocial: "fab fa-twitter",
      colorSocial: "#31c8dd",
      titleSocial: "Twitter",
      textSocial: "40.000 Tweets",
    },
    {
      id: 3,
      iconSocial: "fab fa-google-plus-g",
      colorSocial: "#f78153",
      titleSocial: "Google +",
      textSocial: "460.000 Plus",
    },
    {
      id: 4,
      iconSocial: "fab fa-pinterest",
      colorSocial: "#f75354",
      titleSocial: "Pinterest",
      textSocial: "34.000 Pins",
    },
  ],
  reducers: {},
});
export default slice;
