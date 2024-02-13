import HomeInvoiceActions from "@/components/HomeInvoiceActions/HomeInvoiceActions";
import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import NoInvoice from "@/components/NoInvoice/NoInvoice";
import useInvoices from "@/utils/hooks/invoice/useInvoices";
import { useParams, useSearchParams } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useInvoices();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("status"));

  return (
    <div className="flex flex-col gap-20">
      <HomeInvoiceActions />
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
