import { FC } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput: FC<FormInputProps> = ({ ...props }) => {
  return (
    <input
      className="text-cinder text-sm font-bold px-10 py-4 bg-transparent border border-input focus:border-input-focus outline-none rounded-[4px]"
      {...props}
    />
  );
};

export default FormInput;
