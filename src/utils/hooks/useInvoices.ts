import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useInvoices = () => {
  return useSelector((state: RootState) => state.invoice.invoices);
};

export default useInvoices;
