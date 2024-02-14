import { getInvoices } from "@/api/invoiceApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const useInvoices = () => {
  const [searchParams] = useSearchParams();
  const statusSearchParams = searchParams.get("status");
  const { data, isLoading } = useQuery({
    queryKey: ["invoices", { status: statusSearchParams }],
    queryFn: getInvoices.bind(null, statusSearchParams),
  });

  return { data, isLoading };
};

export default useInvoices;
