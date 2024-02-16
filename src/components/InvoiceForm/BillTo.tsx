import InputGroup from "../InputGroup/InputGroup";
import { FC } from "react";
import { InvoiceFormProps, InvoiceAddress } from "@/utils/@types/types";

interface BillToType extends InvoiceAddress {
  clientName: string;
  clientEmail: string;
}

const BillTo: FC<InvoiceFormProps<BillToType>> = ({
  values: bill,
  handleBlur,
  handleChange,
  errors,
}) => {
  return (
    <div>
      <p className="text-primary text-sm font-bold mb-5">Bill To</p>
      <div>
        <InputGroup
          name="clientName"
          onChange={handleChange}
          onBlur={handleBlur}
          label="Client’s Name"
          value={bill.clientName}
          errorMessage={errors?.clientName}
        />
        <InputGroup
          label="Client’s Email"
          value={bill.clientEmail}
          name="clientEmail"
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors?.clientEmail}
        />
        <InputGroup
          label="Street Address"
          value={bill.street}
          name="clientAddress.street"
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors?.street}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.5rem]">
          <InputGroup
            name="clientAddress.city"
            onChange={handleChange}
            label="City"
            value={bill.city}
            errorMessage={errors?.city}
          />
          <InputGroup
            name="clientAddress.postCode"
            onChange={handleChange}
            label="Post Code"
            value={bill.postCode}
            errorMessage={errors?.postCode}
          />
          <InputGroup
            name="clientAddress.country"
            onChange={handleChange}
            label="Country"
            className="md:col-auto col-span-full"
            value={bill.country}
            errorMessage={errors?.country}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
