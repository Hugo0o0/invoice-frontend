import HomeInvoiceActions from "@/components/HomeInvoiceActions/HomeInvoiceActions";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import InvoiceForm from "@/components/InvoiceForm/InvoiceForm";
import NoInvoice from "@/components/NoInvoice/NoInvoice";
import { Calendar } from "@/components/UI";
import useInvoices from "@/utils/hooks/invoice/useInvoices";

const Home = () => {
  const { data, isLoading } = useInvoices();
  return (
    <div className="flex flex-col gap-20">
      <HomeInvoiceActions />
      <InvoiceForm />
      <div className="flex flex-col gap-5">
        {data && data?.data.data.length === 0 && !isLoading && <NoInvoice />}
        {data &&
          data.data.data.map((invoice) => (
            <InvoiceCard
              loading={isLoading}
              key={invoice.id}
              invoice={invoice}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
