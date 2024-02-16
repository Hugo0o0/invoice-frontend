import { FC } from "react";
import { FormInput } from "../UI";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  inputClassName?: string;
}
const InputGroup: FC<FormInputProps> = ({
  label,
  errorMessage,
  inputClassName,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-5 ${props.className}`}>
      <label
        className={`text-sm text-wild-blue ${errorMessage && "!text-danger"}`}
        htmlFor={label}
      >
        {label}
      </label>
      <FormInput
        {...props}
        className={`${errorMessage && "!border-danger"} ${inputClassName}`}
        id={label}
      />

      <label className="text-danger">{errorMessage}</label>
    </div>
  );
};

export default InputGroup;
