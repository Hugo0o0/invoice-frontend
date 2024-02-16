import { updateInvoice } from "@/api/invoiceApi";
import { Invoice } from "@/utils/@types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useUpdateInvoice = (invoice: Invoice, id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateInvoice.bind(null, invoice, id),
    mutationKey: ["invoice", id],
    onSuccess: (data) => {
      toast.dismiss();
      queryClient.setQueryData(["invoice", id], data);
      toast.success("Updated Invoice");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
    onMutate: () => toast.loading("Updated invoice..."),
  });
};

export default useUpdateInvoice;
