import { useFormik } from "formik";
import InputGroup from "../InputGroup/InputGroup";
import { Button } from "../UI";
import errorSchema from "@/schemas/error";
import { feedbackApi } from "@/api/feedbackApi";
import { toast } from "react-toastify";

const GlobalErrorPage = () => {
  const { errors, handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      email: "",
      reason: "",
    },
    onSubmit: async () => {
      const loadingToast = toast.loading("Sending feedback...");
      try {
        await feedbackApi(values);
        toast.success("Feedback sent successfully.");
      } catch (error: any) {
        if (error.code === "ERR_BAD_REQUEST") {
          toast.error(
            "You can send maximum 3 feedback per day. Please try again tomorrow."
          );
          return;
        }
        toast.error("Error while sending feedback? This app must be useless.");
      } finally {
        toast.dismiss(loadingToast);
      }
    },
    validationSchema: errorSchema,
  });

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm transition-all font-bold w-full bg-item shadow-default py-5 px-5  text-detail rounded-[8px]">
        If you see this page, it means something went wrong. Because i didn't
        add proper error handling in this project,please let me know so i can
        fix it right away.
      </p>

      <form onSubmit={handleSubmit}>
        <InputGroup
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          label="Email"
          name="email"
          type="email"
          errorMessage={errors.email}
        />
        <InputGroup
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.reason}
          label="Reason"
          name="reason"
          type="text"
          errorMessage={errors.reason}
        />
        <Button type="submit" className="animate-bounce">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default GlobalErrorPage;
