import { FC } from "react";
import { FormInput } from "../UI";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const InputGroup: FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-5">
      <label className="text-xs text-wild-blue" htmlFor={label}>
        {label}
      </label>
      <FormInput {...props} id={label} />
    </div>
  );
};

export default InputGroup;
