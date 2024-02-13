import { markAsPaid } from "@/api/invoiceApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useMarkAsPaid = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: markAsPaid.bind(null, id),
    mutationKey: ["invoice", id!],
    onSuccess: (data) => {
      toast.dismiss();
      queryClient.setQueryData(["invoice", id!], data);
      toast.success("Invoice marked as paid");
    },
    onError: (error) => {
      if (
        error.message.includes(
          "Cannot read properties of undefined (reading 'jwt')"
        )
      ) {
        location.reload();
      }
      toast.dismiss();
      toast.error("Failed to mark invoice as paid");
    },
    onMutate: () => toast.loading("Marking invoice as paid..."),
  });
};

export default useMarkAsPaid;
