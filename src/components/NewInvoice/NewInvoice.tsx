import { useParams } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import ModalContent from "../UI/Modal/ModalContent/ModalContent";
import InputGroup from "../InputGroup/InputGroup";
import { Button, Calendar, Plus, Trash } from "../UI";
import PaymentTermDropdown from "../PaymentTermsDropdown/PaymentTermDropdown";
import { useState } from "react";
import { InvoiceItem } from "@/utils/@types/types";
import { useFormik } from "formik";
import { validate } from "@/utils/validate";
const NewInvoice = () => {
  const params = useParams();
  const [items, setItems] = useState<InvoiceItem[] | null>(null);

  const { values, handleChange, setValues, handleSubmit, errors } = useFormik({
    initialValues: {
      billFrom: {
        streetAddress: "",
        city: "",
        postCode: 0,
        country: "",
      },
      billTo: {
        clientName: "",
        clientEmail: "",
        streetAddress: "",
        city: "",
        postCode: 0,
        country: "",
      },

      invoiceDate: new Date(),
      paymentTerms: 0,
      description: "",
      items: null as InvoiceItem[] | null,
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: validate,
  });

  const handleAddItem = () => {
    if (values.items) {
      setValues({
        ...values,
        items: [...values.items, { name: "", quantity: 0, price: 0, total: 0 }],
      });
      return;
    }

    setValues({
      ...values,
      items: [{ name: "", quantity: 0, price: 0, total: 0 }],
    });
  };

  const handleDeleteItem = (index: number) => {
    if (values.items) {
      const newItems = values.items.filter((_, i) => i !== index);
      setValues({ ...values, items: newItems });
    }
  };

  return (
    <Modal isOpen>
      <ModalContent className="!fixed overflow-y-scroll lg:left-[9.5rem] left-0 top-0 h-full bg-item w-full md:w-[61.6rem] lg:w-[71.9rem] md:px-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col gap-[5rem]"
        >
          <p className="text-md font-bold ">
            {params.id ? `Edit ${params.id}` : "New Invoice"}
          </p>

          <div>
            <p className="text-primary text-sm font-bold mb-5">Bill From</p>
            <div>
              <InputGroup
                errorMessage={errors.billFrom?.streetAddress}
                label="Street Address"
                name="billFrom.streetAddress"
                onChange={handleChange}
                value={values.billFrom.streetAddress}
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.5rem]">
                <InputGroup
                  name="billFrom.city"
                  onChange={handleChange}
                  label="City"
                  value={values.billFrom.city}
                  errorMessage={errors.billFrom?.city}
                />
                <InputGroup
                  label="Post Code"
                  name="billFrom.postCode"
                  onChange={handleChange}
                  value={values.billFrom.postCode}
                  errorMessage={errors.billFrom?.postCode}
                />
                <InputGroup
                  label="Country"
                  name="billFrom.country"
                  onChange={handleChange}
                  className="md:col-auto col-span-full"
                  value={values.billFrom.country}
                  errorMessage={errors.billFrom?.country}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm font-bold mb-5">Bill To</p>
            <div>
              <InputGroup
                name="billTo.clientName"
                onChange={handleChange}
                label="Client’s Name"
                value={values.billTo.clientName}
                errorMessage={errors.billTo?.clientName}
              />
              <InputGroup
                label="Client’s Email"
                value={values.billTo.clientEmail}
                name="billTo.clientEmail"
                onChange={handleChange}
                errorMessage={errors.billTo?.clientEmail}
              />
              <InputGroup
                label="Street Address"
                value={values.billTo.streetAddress}
                name="billTo.streetAddress"
                onChange={handleChange}
                errorMessage={errors.billTo?.streetAddress}
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[2.5rem]">
                <InputGroup
                  name="billTo.city"
                  onChange={handleChange}
                  label="City"
                  value={values.billTo.city}
                  errorMessage={errors.billTo?.city}
                />
                <InputGroup
                  name="billTo.postCode"
                  onChange={handleChange}
                  label="Post Code"
                  value={values.billTo.postCode}
                  errorMessage={errors.billTo?.postCode}
                />
                <InputGroup
                  name="billTo.country"
                  onChange={handleChange}
                  label="Country"
                  className="md:col-auto col-span-full"
                  value={values.billTo.country}
                  errorMessage={errors.billTo?.country}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <PaymentTermDropdown option={values.paymentTerms} />
            </div>
            <Calendar initalDate={values.invoiceDate} onDateChange={() => {}} />
          </div>

          <InputGroup
            label="Project Description"
            onChange={handleChange}
            name="description"
            errorMessage={errors.description}
            value={values.description}
          />

          <div>
            <p className="text-[#777F98] text-[1.8rem] font-bold">Item List</p>
            {values.items &&
              values.items.map((item, index) => (
                <div className="grid md:grid-cols-items grid-cols-1 mt-5 items-center justify-between content-center gap-5">
                  <InputGroup label="Item Name" defaultValue={item.name} />
                  <InputGroup
                    label="Qty"
                    inputClassName="px-2"
                    defaultValue={item.quantity}
                  />
                  <InputGroup label="Price" defaultValue={item.price} />
                  <p className="font-bold text-regent-gray text-sm leading-none">
                    {item.total}
                  </p>
                  <Trash onClick={handleDeleteItem.bind(null, index)} />
                </div>
              ))}
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-5"
              onClick={handleAddItem}
            >
              <Plus />
              Add New Item
            </Button>
          </div>

          <div className="flex gap-5 justify-between w-full md:justify-end items-center">
            <div className="md:flex-1">
              <Button variant="secondary">Discard</Button>
            </div>
            <Button variant={params.id ? "secondary" : "dark"}>
              {params.id ? "Cancel" : "Save as Draft"}
            </Button>
            <Button type="submit">
              {params.id ? "Save Changes" : "Save & Send"}
            </Button>
          </div>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NewInvoice;
