import { Invoice } from "@/utils/@types/types";
import { createSlice } from "@reduxjs/toolkit";
import data from "@/data.json";

const initialState = {
  invoices: data as Invoice[],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    filterByStatus: (state, action) => {
      state.invoices = initialState.invoices;
      const status = action.payload;
      if (status.length === 0 || status.length === 3) {
        state.invoices = initialState.invoices;
        return;
      }
      state.invoices = state.invoices.filter((invoice) =>
        status.includes(invoice.status)
      );
    },
  },
});

export const { filterByStatus } = invoiceSlice.actions;
export default invoiceSlice.reducer;
