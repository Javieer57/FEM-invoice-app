import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/ui";
import invoicesReducer from "./slices/invoices";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    invoices: invoicesReducer,
  },
});
