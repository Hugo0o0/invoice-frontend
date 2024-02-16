const validateAddress = (errors: any, address: any) => {
  if (!address) {
    throw new Error("Address is required");
  } else {
    if (!address.streetAddress) {
      errors.streetAddress = "Stree Address is required";
    }

    if (!address.city) {
      errors.city = "City is required";
    }
    if (!address.country) {
      errors.country = "Country is required";
    }
    if (!address.postCode) {
      errors.postCode = "Post code is required";
    }
  }
};

export const validate = (values: any) => {
  const errors: any = {};
  errors.clientAddress = {};
  errors.senderAddress = {};
  if (!values.description) {
    errors.description = "Description is required";
  }
  validateAddress(errors, values.clientAddress);
  validateAddress(errors, values.senderAddress);

  return errors;
};
