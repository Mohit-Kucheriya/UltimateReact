import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./feature/accounts/accountSlice";
import customerReducer from "./feature/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
