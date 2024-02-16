import { Invoice } from "@/utils/@types/types";

const initialValues: Invoice = {
  clientName: "",
  clientEmail: "",
  status: "pending",

  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  total: 0,
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },

  paymentDue: new Date(),
  paymentTerms: 0,
  description: "",
  items: [],
};

export default initialValues;
