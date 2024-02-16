import { FormikErrors } from "formik";

export interface Icon extends React.SVGAttributes<SVGElement> {}

export interface Invoice {
  id?: string;
  createdAt?: Date;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: "pending" | "paid" | "draft";
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  items: InvoiceItem[];
  total: number;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface InvoiceAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface User {
  name: string | null;
  email: string | null;
  token: {
    jwt: string | null;
  };
}

export interface SignupUser {
  name: string;
  email: string;
  password: string;
}

export interface AuthApiReturnType {
  status: "success" | "error" | "fail";
  data: User;
}

export interface InvoiceFormProps<T> {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: FormikErrors<T>;
}
