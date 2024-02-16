import { useParams } from "react-router-dom";
import { Button } from "../UI";
import useAddInvoice from "@/utils/hooks/invoice/useAddInvoice";
import { Invoice } from "@/utils/@types/types";
import { SetStateAction } from "react";

const InvoiceFormActions = ({
  invoice,
  closeModal,
}: {
  invoice: Invoice;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { mutate } = useAddInvoice(invoice);

  const handleSave = () => {
    mutate();
  };

  const params = useParams();
  return (
    <div className="flex gap-5 justify-between w-full md:justify-end items-center">
      <div className="md:flex-1">
        <Button variant="secondary" onClick={closeModal.bind(null, false)}>
          Discard
        </Button>
      </div>
      <Button variant={params.id ? "secondary" : "dark"}>
        {params.id ? "Cancel" : "Save as Draft"}
      </Button>
      <Button type="submit">
        {params.id ? "Save Changes" : "Save & Send"}
      </Button>
    </div>
  );
};

export default InvoiceFormActions;
