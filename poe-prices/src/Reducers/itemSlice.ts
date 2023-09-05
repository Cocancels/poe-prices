import { createSlice } from "@reduxjs/toolkit";

interface ActionItemState {
  payload: {
    itemType: string;
    result: any;
  };
}

export const itemSlice = createSlice({
  name: "Items",
  initialState: {},

  reducers: {
    setItems: (state: any, action: ActionItemState) => {
      const itemType = action.payload.itemType.toLowerCase();
      state[itemType] = action.payload.result;
    },
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
