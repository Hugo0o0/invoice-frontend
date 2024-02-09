export interface Icon extends React.SVGAttributes<SVGElement> {}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: "pending" | "paid" | "draft";
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: InvoiceItem[];
  total: number;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
