import HomeInvoiceActions from "@/components/HomeInvoiceActions/HomeInvoiceActions";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import useInvoice from "@/utils/hooks/useInvoices";

const Home = () => {
  const invoices = useInvoice();

  return (
    <div className="flex flex-col gap-20">
      <HomeInvoiceActions />

      <div className="flex flex-col gap-5">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default Home;
