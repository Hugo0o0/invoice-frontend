import { deleteInvoice } from "@/api/invoiceApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useMarkAsPaid = (id: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteInvoice.bind(null, id),
    mutationKey: ["invoice", id!],
    onSuccess: (data) => {
      toast.dismiss();
      queryClient.setQueryData(["invoice", id!], data);
      toast.success("Invoice deleted");
      navigate("/");
    },
    onError: () => {
      toast.dismiss();
      toast.error("Failed to delete invoice");
    },
    onMutate: () => toast.loading("Deleting invoice..."),
  });
};

export default useMarkAsPaid;
