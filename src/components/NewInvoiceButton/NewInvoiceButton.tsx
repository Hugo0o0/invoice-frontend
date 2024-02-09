import { Button, Plus } from "../UI";

const NewInvoiceButton = () => {
  return (
    <Button variant="primary" className="flex items-center gap-3">
      <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-white flex items-center justify-center">
        <Plus />
      </div>
      <span className="md:inline hidden">New Invoice</span>
      <span className="md:hidden inline ">New</span>
    </Button>
  );
};

export default NewInvoiceButton;
