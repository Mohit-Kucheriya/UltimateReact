import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartReducer,
  },
});

export default store;
