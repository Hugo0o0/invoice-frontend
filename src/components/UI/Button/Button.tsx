import classNames from "classnames";
import { FC } from "react";
import classes from "./classes";

export type Variant = "primary" | "secondary" | "dark" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: Variant;
}

const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
  const className = classNames(
    classes.defaults,
    classes.classes[variant!],
    props.className
  );
  return (
    <button type="button" {...props} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
