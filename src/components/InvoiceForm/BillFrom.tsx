import InputGroup from "../InputGroup/InputGroup";
import { InvoiceFormProps, InvoiceAddress } from "@/utils/@types/types";
import { FC } from "react";

const BillFrom: FC<InvoiceFormProps<InvoiceAddress>> = ({
  values: bill,
  handleChange,
  errors,
  handleBlur,
}) => {
  return (
    <div>
      <p className="text-primary text-sm font-bold mb-5">Bill From</p>
      <div>
        <InputGroup
          errorMessage={errors?.street}
          label="Street Address"
          name="senderAddress.street"
          onChange={handleChange}
          value={bill.street}
          onBlur={handleBlur}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.5rem]">
          <InputGroup
            name="senderAddress.city"
            onChange={handleChange}
            label="City"
            value={bill.city}
            onBlur={handleBlur}
            errorMessage={errors?.city}
          />
          <InputGroup
            label="Post Code"
            name="senderAddress.postCode"
            onChange={handleChange}
            value={bill.postCode}
            onBlur={handleBlur}
            errorMessage={errors?.postCode}
          />
          <InputGroup
            label="Country"
            name="senderAddress.country"
            onChange={handleChange}
            className="md:col-auto col-span-full"
            value={bill.country}
            onBlur={handleBlur}
            errorMessage={errors?.country}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
