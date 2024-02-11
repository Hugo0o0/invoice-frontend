import { InvoiceItem } from "@/utils/@types/types";

const InvoiceItems = ({ items }: { items?: InvoiceItem[] }) => {
  if (!items) return null;
  return (
    <div className="bg-body rounded-[8px]  flex flex-col gap-5">
      <div className="text-detail px-10 py-5 text-xs flex justify-between">
        <p className="flex-1 hidden md:flex">Item Name</p>
        <div className="hidden md:flex justify-between flex-1">
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
        </div>
      </div>

      {items.map((item, index) => (
        <div
          key={Math.random() * index}
          className="text-sm px-10  flex justify-between items-center"
        >
          <div className="flex-1 font-bold text-sm">
            <p>{item.name}</p>
            <p className="md:hidden block text-detail">
              {item.quantity} x £{item.price}
            </p>
          </div>
          <div className="flex md:justify-between font-bold justify-end flex-1">
            <p className="md:block hidden">{item.quantity}</p>
            <p className="md:block hidden">£{item.price}</p>
            <p>£{item.total}</p>
          </div>
        </div>
      ))}

      <div className="bg-amount flex justify-between items-center text-white rounded-br-[8px] rounded-bl-[8px] px-10 py-12">
        <p className="text-xs">Amount Due</p>
        <p className="text-[32px] font-bold">
          £{items.reduce((acc, item) => acc + item.total, 0)}
        </p>
      </div>
    </div>
  );
};

export default InvoiceItems;
