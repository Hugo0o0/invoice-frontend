import { Heading } from "../UI";
import NewInvoiceButton from "../NewInvoiceButton/NewInvoiceButton";
import FilterInvoiceDropdown from "../FilterInvoiceDropdown/FilterInvoiceDropdown";
import useInvoices from "@/utils/hooks/invoice/useInvoices";

const HomeInvoiceActions = ({
  openForm,
}: {
  openForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data } = useInvoices();
  const invoiceLength = data?.data.data.length;

  return (
    <div className="flex items-center justify-between">
      <div>
        <Heading size="md">Invoices</Heading>
        <p className="text-regent-gray">
          There are total {invoiceLength}{" "}
          {invoiceLength === 1 ? "invoice" : "invoices"}.
        </p>
      </div>

      <div className="flex items-center gap-14">
        <FilterInvoiceDropdown />
        <NewInvoiceButton onClick={openForm.bind(null, true)} />
      </div>
    </div>
  );
};

export default HomeInvoiceActions;
