import GoBackButton from "@/components/GoBackButton/GoBackButton";
import InvoiceDetailsActions from "@/components/InvoiceDetailsActions/InvoiceDetailsActions";
import InvoiceDetailsBody from "@/components/InvoiceDetailsBody/InvoiceDetailsBody";
import NoInvoice from "@/components/NoInvoice/NoInvoice";
import { Skeleton } from "@/components/UI";
import useInvoice from "@/utils/hooks/useInvoice";
import { useParams } from "react-router-dom";

const Invoice = () => {
  const { id } = useParams();
  const { data, isLoading } = useInvoice(id!);

  if ((!data || !data.data.data) && !isLoading) return <NoInvoice />;
  if (isLoading) return <Skeleton />;
  return (
    <div className="flex flex-col gap-10 items-start">
      <GoBackButton />
      <InvoiceDetailsActions />
      <InvoiceDetailsBody loading={isLoading} invoice={data?.data.data!} />
    </div>
  );
};

export default Invoice;
