import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [
    { name: "draft", active: false },
    { name: "pending", active: false },
    { name: "paid", active: false },
  ],
};

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { name } = action.payload;
      const filter = state.filters.find((filter) => filter.name === name);
      filter.active = !filter.active;
    },
  },
});

export const { toggleFilter } = invoicesSlice.actions;

export default invoicesSlice.reducer;
