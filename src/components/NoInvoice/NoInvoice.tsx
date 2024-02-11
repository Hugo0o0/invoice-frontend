import { Heading, IllustrationEmpty } from "../UI";

const NoInvoice = () => {
  return (
    <div className="flex items-center justify-center   gap-4 flex-col w-[24rem] mx-auto">
      <IllustrationEmpty />
      <Heading size="md">There is nothing here</Heading>

      <p className="text-xs text-regent-gray text-center">
        Create a new invoice by clicking the{" "}
        <span className="font-bold">New Invoice</span> button and get started
      </p>
    </div>
  );
};

export default NoInvoice;
