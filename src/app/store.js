import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slices/invoices";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
});
