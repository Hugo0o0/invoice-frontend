import { useParams } from "react-router-dom";
import InvoiceStatus from "../InvoiceStatus/InvoiceStatus";
import { Button } from "../UI";
import useInvoice from "@/utils/hooks/invoice/useInvoice";
import useMarkAsPaid from "@/utils/hooks/invoice/useMarkAsPaid";
import useDeleteInvoice from "@/utils/hooks/invoice/useDeleteInvoice";
const InvoiceDetailsActions = () => {
  const { id } = useParams();
  const { data } = useInvoice(id!);
  const { mutate } = useMarkAsPaid(id!);
  const { mutate: mutateDeleteInvoice } = useDeleteInvoice(id!);

  return (
    <div className="flex shadow-default items-center justify-between bg-item rounded-[8px] py-9 px-10 w-full">
      <div className="flex md:w-auto w-full justify-between items-center gap-6">
        <p className="text-xs text-[#858BB2]">Status</p>
        <InvoiceStatus status={data?.data.data.status!} />
      </div>
      <div className="flex md:static md:w-auto bottom-0 md:py-0 py-5  md:bg-transparent bg-item left-0 justify-center items-center fixed w-full items-center gap-6">
        <Button variant="secondary">Edit</Button>
        <Button
          variant="danger"
          onClick={() => {
            mutateDeleteInvoice();
          }}
        >
          Delete
        </Button>
        <Button
          onClick={async () => {
            if (data?.data.data.status !== "paid") {
              mutate();
            }
          }}
          disabled={false}
          variant="primary"
        >
          Mark as Paid
        </Button>
      </div>
    </div>
  );
};

export default InvoiceDetailsActions;
