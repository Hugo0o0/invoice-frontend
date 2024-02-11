import classNames from "classnames";
import { FC } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput: FC<FormInputProps> = ({ className, ...props }) => {
  const classes = classNames(
    "text-cinder text-sm font-bold text-default px-10 py-4 bg-transparent border border-input focus:border-input-focus outline-none rounded-[4px]",
    className
  );
  return <input className={classes} {...props} />;
};

export default FormInput;
