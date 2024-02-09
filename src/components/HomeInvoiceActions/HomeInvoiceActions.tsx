import useInvoice from "@/utils/hooks/useInvoices";
import { Heading } from "../UI";
import NewInvoiceButton from "../NewInvoiceButton/NewInvoiceButton";
import FilterInvoiceDropdown from "../FilterInvoiceDropdown/FilterInvoiceDropdown";

const HomeInvoiceActions = () => {
  const invoices = useInvoice();
  return (
    <div className="flex items-center justify-between">
      <div>
        <Heading size="md">Invoices</Heading>
        <p className="text-regent-gray">
          There are total {invoices.length} invoices.
        </p>
      </div>

      <div className="flex items-center gap-14">
        <FilterInvoiceDropdown />
        <NewInvoiceButton />
      </div>
    </div>
  );
};

export default HomeInvoiceActions;
