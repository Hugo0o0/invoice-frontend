import { getInvoice } from "@/api/invoiceApi";
import { useQuery } from "@tanstack/react-query";

const useInvoice = (id: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["invoice", id],
    queryFn: getInvoice.bind(null, id),
  });

  return { data, isLoading, refetch };
};

export default useInvoice;
