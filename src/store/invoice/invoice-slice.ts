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

    markAsPaid: (state, action) => {
      const id = action.payload;
      const invoice = state.invoices.find((invoice) => invoice.id === id);
      if (invoice) {
        invoice.status = "paid";
      }
    },
  },
});

export const { filterByStatus, markAsPaid } = invoiceSlice.actions;
export default invoiceSlice.reducer;
