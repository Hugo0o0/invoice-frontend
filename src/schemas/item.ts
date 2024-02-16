import { ItemErrorMessages } from "@/utils/@types/enums/ErrorMessages";
import { object, number, string } from "yup";

const item = object({
  name: string()
    .typeError(ItemErrorMessages.INVALID_NAME)
    .required(ItemErrorMessages.NAME_REQUIRED),
  quantity: number()
    .typeError(ItemErrorMessages.INVALID_QUANTITY)
    .required(ItemErrorMessages.QUANTITY_REQUIRED),
  price: number()
    .typeError(ItemErrorMessages.INVALID_PRICE)
    .required(ItemErrorMessages.PRICE_REQUIRED),
  total: number()
    .typeError(ItemErrorMessages.INVALID_TOTAL)
    .required(ItemErrorMessages.TOTAL_REQUIRED),
});

export default item;
