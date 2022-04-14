import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "dsfsdf2w2asdnjgthko5",
  name: "Платье из коллекции Crystal",
  price: 60000,
  sizes: ["s", "m", "xl"],
  images: [
    "https://lanamarinenko.com/upload/iblock/686/686878707e6d0a1c5662a8331b1e52ed.jpg",
    "https://lanamarinenko.com/upload/iblock/ef3/ef3709277feccd903e1adb761c1cb1d4.jpg",
  ],
};

export const productSlice = createSlice({
  name: "product", //имя редьюсера
  initialState, //начальное состояние
  reducers: {},
});
