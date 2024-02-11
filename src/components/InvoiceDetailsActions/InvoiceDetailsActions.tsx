import { useParams } from "react-router-dom";
import InvoiceStatus from "../InvoiceStatus/InvoiceStatus";
import { Button } from "../UI";
import { useDispatch } from "react-redux";
import { markAsPaid } from "@/store/invoice/invoice-slice";
import useInvoice from "@/utils/hooks/useInvoice";

const InvoiceDetailsActions = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleMarkAsPaid = () => {
    dispatch(markAsPaid(id));
  };

  const { invoice } = useInvoice(id!);

  return (
    <div className="flex shadow-default items-center justify-between bg-item rounded-[8px] py-9 px-10 w-full">
      <div className="flex md:w-auto w-full justify-between items-center gap-6">
        <p className="text-xs text-[#858BB2]">Status</p>
        <InvoiceStatus status={invoice?.status!} />
      </div>
      <div className="flex md:static md:w-auto bottom-0 md:py-0 py-5  md:bg-transparent bg-item left-0 justify-center items-center fixed w-full items-center gap-6">
        <Button variant="secondary">Edit</Button>
        <Button variant="danger">Delete</Button>
        <Button
          disabled={invoice?.status === "paid"}
          variant="primary"
          onClick={handleMarkAsPaid}
        >
          Mark as Paid
        </Button>
      </div>
    </div>
  );
};

export default InvoiceDetailsActions;
