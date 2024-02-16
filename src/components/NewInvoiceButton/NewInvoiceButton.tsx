import { Button, Plus } from "../UI";

interface NewInvoiceButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}
const NewInvoiceButton = (props: NewInvoiceButtonProps) => {
  return (
    <Button
      variant="primary"
      className="flex items-center gap-3"
      onClick={props.onClick}
    >
      <div className="w-[3.2rem] h-[3.2rem] rounded-full bg-white flex items-center justify-center">
        <Plus />
      </div>
      <span className="md:inline hidden">New Invoice</span>
      <span className="md:hidden inline ">New</span>
    </Button>
  );
};

export default NewInvoiceButton;
