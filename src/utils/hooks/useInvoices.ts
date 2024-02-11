import { getInvoices } from "@/api/invoiceApi";
import { useQuery } from "@tanstack/react-query";

const useInvoices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  return { data, isLoading };
};

export default useInvoices;
