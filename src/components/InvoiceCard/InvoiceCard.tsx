import { Invoice } from "@/utils/@types/types";
import InvoiceStatus from "../InvoiceStatus/InvoiceStatus";
import { ArrowRight, Skeleton } from "../UI";
import { Link } from "react-router-dom";
import { formatDate } from "@/utils/utils";

const InvoiceCard = ({
  invoice,
  loading,
}: {
  invoice: Invoice;
  loading?: boolean;
}) => {
  if (loading) return <Skeleton />;
  return (
    <Link
      to={`invoices/${invoice.id}`}
      className="bg-item  shadow-default text-sm flex items-center px-5 py-6 border border-[transparent] hover:border-[#7C5DFA] rounded-[8px] justify-between  cursor-pointer"
    >
      <div className="flex items-center flex-col md:flex-row gap-[4rem]">
        <div className="flex items-center font-bold">
          <p className="text-wild-blue">#</p>
          <p>
            {invoice.id.slice(0, 5)}...{invoice.id.slice(20)}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-regent-gray  leading-none">Due</p>
          <p className="text-xs text-wild-blue leading-none">
            {formatDate(invoice.createdAt)}
          </p>
        </div>
        <p className="text-[#858BB2]">{invoice.clientName}</p>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-[4rem]">
        <p className="font-bold">£{invoice.total}</p>
        <InvoiceStatus status={invoice.status} />
        <ArrowRight className="hidden md:block" />
      </div>
    </Link>
  );
};

export default InvoiceCard;
