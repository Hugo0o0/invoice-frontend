import { addInvoice } from "@/api/invoiceApi";
import { Invoice } from "@/utils/@types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const useAddInvoice = (data: Invoice) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const statusSearchParams = searchParams.get("status");
  return useMutation({
    mutationFn: addInvoice.bind(null, data),
    mutationKey: ["invoice", { status: statusSearchParams }],
    onSuccess: (data) => {
      toast.dismiss();
      queryClient.setQueryData(
        ["invoice", { status: statusSearchParams }],
        data
      );
      toast.success("Added New Invoice");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
    onMutate: () => toast.loading("Adding new invoice..."),
  });
};

export default useAddInvoice;
