import { getInvoices } from "@/api/invoiceApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const useInvoices = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["invoices", { status: searchParams.get("status") }],
    queryFn: getInvoices.bind(null, searchParams.get("status")),
  });

  return { data, isLoading };
};

export default useInvoices;
