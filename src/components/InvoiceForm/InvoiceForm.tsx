import { useParams } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import ModalContent from "../UI/Modal/ModalContent/ModalContent";
import InputGroup from "../InputGroup/InputGroup";
import { Calendar } from "../UI";
import PaymentTermDropdown from "../PaymentTermsDropdown/PaymentTermDropdown";
import { Invoice, InvoiceItem } from "@/utils/@types/types";
import { FormikErrors, useFormik } from "formik";
import invoiceSchema from "@/schemas/invoice";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemLists from "./ItemLists";
import InvoiceFormActions from "./InvoiceFormActions";
import initialValues from "./initialValues";
import useInvoice from "@/utils/hooks/invoice/useInvoice";
import useAddInvoice from "@/utils/hooks/invoice/useAddInvoice";
import { useState } from "react";
const InvoiceForm = () => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(true);
  // const invoice = useInvoice(params.id!);

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    setFieldValue,
  } = useFormik<Invoice>({
    initialValues: initialValues,
    onSubmit: async () => {
      await mutateAsync();
      setIsOpen(false);
    },
    validationSchema: invoiceSchema,
  });
  const { mutateAsync } = useAddInvoice(values);

  return (
    <Modal isOpen={isOpen}>
      <ModalContent className="!fixed overflow-y-scroll lg:left-[9.5rem] left-0 top-0 h-full bg-item w-full md:w-[61.6rem] lg:w-[71.9rem] md:px-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col gap-[5rem]"
        >
          <p className="text-md font-bold ">
            {params.id
              ? `Edit #${params.id.slice(0, 5)}...${params.id.slice(20)}`
              : "New Invoice"}
          </p>

          <BillFrom
            handleBlur={handleBlur}
            values={values.senderAddress}
            handleChange={handleChange}
            errors={errors.senderAddress}
          />

          <BillTo
            handleBlur={handleBlur}
            values={{
              ...values.clientAddress,
              clientName: values.clientName,
              clientEmail: values.clientEmail,
            }}
            errors={{
              ...errors.clientAddress,
              clientName: errors.clientName,
              clientEmail: errors.clientEmail,
            }}
            handleChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <PaymentTermDropdown
                onSelect={(e) => setFieldValue("paymentTerms", e)}
              />
            </div>
            <Calendar
              initalDate={values.paymentDue}
              onDateChange={(date) => setFieldValue("paymentDue", date)}
            />
          </div>

          <InputGroup
            label="Project Description"
            onChange={handleChange}
            name="description"
            errorMessage={errors.description}
            value={values.description}
          />

          <ItemLists
            handleBlur={handleBlur}
            handleChange={handleChange}
            setItems={setFieldValue}
            values={values.items}
            errors={errors.items as (FormikErrors<InvoiceItem> | undefined)[]}
          />

          <InvoiceFormActions closeModal={setIsOpen} invoice={values} />
        </form>
      </ModalContent>
    </Modal>
  );
};

export default InvoiceForm;
