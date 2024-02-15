const validateBillTo = (errors: any, bill: any) => {
  if (!bill) {
    throw new Error("Bill to is required");
  } else {
    if (!bill.clientName) {
      errors.billTo.clientName = "Client Name is required";
    }
    if (!bill.clientEmail) {
      errors.billTo.clientEmail = "Client Email is required";
    }
    if (!bill.streetAddress) {
      errors.billTo.streetAddress = "Stree Address is required";
    }

    if (!bill.city) {
      errors.billTo.city = "City is required";
    }
    if (!bill.country) {
      errors.billTo.country = "Country is required";
    }
    if (!bill.postCode) {
      errors.billTo.postCode = "Post code is required";
    }
  }
};

const validateBillFrom = (errors: any, bill: any) => {
  if (!bill) {
    errors.billFrom = "Bill from is required";
  } else {
    if (!bill.streetAddress) {
      errors.billFrom.streetAddress = "Stree Address is required";
    }

    if (!bill.city) {
      errors.billFrom.city = "City is required";
    }
    if (!bill.country) {
      errors.billFrom.country = "Country is required";
    }
    if (!bill.postCode) {
      errors.billFrom.postCode = "Post code is required";
    }
  }
};

export const validate = (values: any) => {
  const errors: any = {};
  errors.billTo = {};
  errors.billFrom = {};
  if (!values.description) {
    errors.description = "Description is required";
  }
  validateBillTo(errors, values.billTo);
  validateBillFrom(errors, values.billFrom);
  return errors;
};
