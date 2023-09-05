import { createSlice } from "@reduxjs/toolkit";

export const divineSlice = createSlice({
  name: "Divine price",
  initialState: {
    price: 0,
  },

  reducers: {
    setDivinePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setDivinePrice } = divineSlice.actions;

export default divineSlice.reducer;
