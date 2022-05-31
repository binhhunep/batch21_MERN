import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "shopBlock",
  initialState: [
    {
      id: 1,
      productImage: "1.jpg",
      productName: "SMOOTH TALKER CARGO BOYFRIEND JEANS",
      productInfor:
        "Memorial Day Sale Starts Now! 30-60% Off Site Wide! Prices As Marked.",
      productSize: "XL/XXL/S",
      productPrices: "30.99",
      discount: "$44.9",
      unit: "$",
    },
    {
      id: 2,
      productImage: "2.jpg",
      productName: "TALL MARILYN SKINNY JEANS ",
      productInfor: "Nova Essentials. Timeless Staples For Everyday Prices.",
      productSize: "XL/XXL/S",
      productPrices: "18.00",
      discount: "",
      unit: "$",
    },
    {
      id: 3,
      productImage: "3.jpg",
      productName: "SASSY STRAIGHT LEG JEANS",
      productInfor: "Nova Essentials. Timeless Staples For Everyday Prices.",
      productSize: "XL/XXL/S",
      productPrices: "30.99",
      discount: "",
      unit: "$",
    },
    {
      id: 4,
      productImage: "4.jpg",
      productName: "TALL MARILYN HIGH WAISTED SKINNY JEANS",
      productInfor:
        "Memorial Day Sale Starts Now! 30-60% Off Site Wide! Prices As Marked.",
      productSize: "XL/XXL/S",
      productPrices: "30.99",
      discount: "$44.99",
      unit: "$",
    },
  ],
  reducers: {},
});
export default slice;
