import { configureStore } from "@reduxjs/toolkit";
import { ShopSlice } from "./shop.reducer";

export default configureStore({
  reducer: {
    shopData: ShopSlice.reducer,
  },
});
