import { Invoice } from "./@types/types";

export const sanitize = (data: Invoice) => {
  return {
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    status: data.status,

    clientAddress: {
      street: data.clientAddress.street,
      city: data.clientAddress.city,
      postCode: data.clientAddress.postCode,
      country: data.clientAddress.country,
    },
    total: data.total,
    senderAddress: {
      street: data.clientAddress.street,
      city: data.clientAddress.city,
      postCode: data.clientAddress.postCode,
      country: data.clientAddress.country,
    },

    paymentDue: data.paymentDue,
    paymentTerms: data.paymentTerms,
    description: data.description,
    items: data.items,
  };
};
