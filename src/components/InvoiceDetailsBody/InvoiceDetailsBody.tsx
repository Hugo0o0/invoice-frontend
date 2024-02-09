import useInvoice from "@/utils/hooks/useInvoice";

const InvoiceDetailsBody = ({ id }: { id: string }) => {
  const { invoice } = useInvoice(id);

  console.log(invoice);

  return (
    <div className="bg-item py-20 px-16 flex flex-col gap-5 shadow-default w-full rounded-[8px] ">
      <div className="flex justify-between md:flex-row flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-sm font-bold">
            <p>#</p>
            <p>{invoice?.id}</p>
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-between leading-none">
        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Invoice Date</p>
          <p className="text-sm font-bold">{invoice?.createdAt}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Bill To</p>
          <p className="text-sm font-bold">{invoice?.clientName}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Sent To</p>
          <p className="text-sm font-bold">{invoice?.clientEmail}</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs text-detail">Payment Due</p>
          <p className="text-sm font-bold">{invoice?.paymentDue}</p>
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
    </div>
  );
};

export default InvoiceDetailsBody;
