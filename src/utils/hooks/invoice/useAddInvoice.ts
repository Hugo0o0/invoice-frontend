import { addInvoice } from "@/api/invoiceApi";
import { Invoice } from "@/utils/@types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const useAddInvoice = (data: Invoice) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const statusSearchParams = searchParams.get("status");
  return useMutation({
    mutationFn: addInvoice.bind(null, data),
    mutationKey: ["invoice", { status: statusSearchParams }],
    onSuccess: () => {
      toast.dismiss();
      queryClient.refetchQueries({
        queryKey: ["invoices", { status: statusSearchParams }],
      });
      toast.success("Added New Invoice");
    },
    onError: (error: AxiosError<any>) => {
      toast.dismiss();
      if (error.code === "ERR_BAD_REQUEST") {
        handleBadRequest(error.response?.data.errors);
      }
    },
    onMutate: () => toast.loading("Adding new invoice..."),
  });
};

const handleBadRequest = (error: any) => {
  Object.keys(error).forEach((key) => {
    toast.error(`${key}: ${error[key]}`, { autoClose: 10000 });
  });
};

export default useAddInvoice;
