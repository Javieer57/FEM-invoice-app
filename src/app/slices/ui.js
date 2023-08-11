import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newInvoiceFormOpen: false,
  editInvoiceFormOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNewInvoiceForm: (state) => {
      state.newInvoiceFormOpen = !state.newInvoiceFormOpen;
    },
    toggleEditInvoiceForm: (state) => {
      state.editInvoiceFormOpen = !state.editInvoiceFormOpen;
    },
  },
});

export const { toggleEditInvoiceForm, toggleNewInvoiceForm } = uiSlice.actions;

export default uiSlice.reducer;
