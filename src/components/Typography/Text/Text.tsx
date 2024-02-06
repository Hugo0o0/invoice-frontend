import { FC, HTMLAttributes } from "react";

type Type = "primary" | "secondary";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: Type;
}

const Text: FC<TextProps> = ({ children, type, ...props }) => {
  const classes: {
    [key in Type]: string;
  } = {
    primary: "text-body leading-sm font-medium tracking-xl",
    secondary: "text-body leading-xs font-medium tracking-md",
  };

  return (
    <p className={classes[type!]} {...props}>
      {children}
    </p>
  );
};

Text.defaultProps = {
  type: "primary",
};

export default Text;
