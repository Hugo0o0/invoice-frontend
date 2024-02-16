import InvoiceItems from "../InvoiceItems/InvoiceItems";
import { Invoice } from "@/utils/@types/types";
import { formatDate } from "@/utils/utils";
import { Skeleton } from "../UI";
import { cutText } from "@/utils/cutText";

const InvoiceDetailsBody = ({
  invoice,
  loading,
}: {
  invoice: Invoice;
  loading?: Boolean;
}) => {
  if (loading) return <Skeleton />;

  return (
    <div className="bg-item md:mb-0 mb-14 py-20 px-16 flex flex-col gap-5 shadow-default w-full rounded-[8px] ">
      <div className="flex justify-between md:flex-row flex-col gap-7">
        <div className="flex flex-col leading-none">
          <div className="flex items-center text-sm font-bold">
            <p>#</p>
            <p>{cutText(invoice.id, 5)}</p>
          </div>
          <p className="text-sm text-detail">{invoice?.description}</p>
        </div>

        <div className="text-detail text-xs text-left md:text-right">
          <p>{invoice?.senderAddress.street}</p>
          <p>{invoice?.senderAddress.city}</p>
          <p>{invoice?.senderAddress.postCode}</p>
          <p>{invoice?.senderAddress.country}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-between leading-none">
        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Invoice Date</p>
          <p className="text-sm font-bold">
            {formatDate(invoice?.createdAt || new Date())}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Bill To</p>
          <p className="text-sm font-bold">{invoice?.clientName}</p>
        </div>

        <div className="flex flex-col gap-4 md:row-auto row-start-3">
          <p className="text-xs text-detail">Sent To</p>
          <p className="text-sm font-bold">{invoice?.clientEmail}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Payment Due</p>
          <p className="text-sm font-bold">{formatDate(invoice?.paymentDue)}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-detail text-xs text-left leading-sm">
            <p>{invoice?.clientAddress.street}</p>
            <p>{invoice?.clientAddress.city}</p>
            <p>{invoice?.clientAddress.postCode}</p>
            <p>{invoice?.clientAddress.country}</p>
          </div>
        </div>
      </div>

      <InvoiceItems items={invoice?.items} />
    </div>
  );
};

export default InvoiceDetailsBody;
