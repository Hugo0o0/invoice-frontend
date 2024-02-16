import { string, object } from "yup";
import { AddressErrorMessages } from "@/utils/@types/enums/ErrorMessages";

const address = object({
  postCode: string().required(AddressErrorMessages.POSTCODE_REQUIRED),
  country: string().required(AddressErrorMessages.COUNTRY_REQUIRED),
  city: string().required(AddressErrorMessages.CITY_REQUIRED),
  street: string().required(AddressErrorMessages.STREET_REQUIRED),
});

export default address;
