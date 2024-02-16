import { object, string, date, number, array } from "yup";
import address from "./address";
import item from "./item";
import {
  InvoiceErrorMessages,
  UserErrorMessages,
} from "@/utils/@types/enums/ErrorMessages";

const invoiceSchema = object({
  status: string()
    .required(InvoiceErrorMessages.STATUS_REQUIRED)
    .oneOf(["pending", "paid", "draft"]),
  description: string().required(InvoiceErrorMessages.DESCRIPTION_REQUIRED),
  clientName: string().required(InvoiceErrorMessages.CLIENT_NAME_REQUIRED),
  clientEmail: string()
    .email(UserErrorMessages.INVALID_EMAIL)
    .required(UserErrorMessages.EMAIL_REQUIRED),
  paymentDue: date().required(InvoiceErrorMessages.PAYMENT_DUE_REQUIRED),
  paymentTerms: number().required(InvoiceErrorMessages.PAYMENT_DUE_REQUIRED),
  total: number().required(InvoiceErrorMessages.TOTAL_REQUIRED),
  senderAddress: address,
  clientAddress: address,
  items: array().of(item).required(),
});

export default invoiceSchema;
