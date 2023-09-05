import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import divineSlice from "./divineSlice";

export default configureStore({
  reducer: {
    items: itemSlice,
    divinePrice: divineSlice,
  },
});
