import GoBackButton from "@/components/GoBackButton/GoBackButton";
import InvoiceDetailsActions from "@/components/InvoiceDetailsActions/InvoiceDetailsActions";
import InvoiceDetailsBody from "@/components/InvoiceDetailsBody/InvoiceDetailsBody";
import { useParams } from "react-router-dom";

const Invoice = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-10 items-start">
      <GoBackButton />
      <InvoiceDetailsActions />
      <InvoiceDetailsBody id={id!} />
    </div>
  );
};

export default Invoice;
