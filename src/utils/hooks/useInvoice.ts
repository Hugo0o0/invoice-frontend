import useInvoices from "./useInvoices";

const useInvoice = (id: string) => {
  const invoices = useInvoices();

  const invoice = invoices.find((invoice) => invoice.id === id);

  return {
    invoice,
  };
};

export default useInvoice;
