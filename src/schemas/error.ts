import { object, string } from "yup";

const errorSchema = object({
  reason: string().required("Please provide a reason"),
  email: string().email("Invalid email").required("Please provide an email"),
});

export default errorSchema;
