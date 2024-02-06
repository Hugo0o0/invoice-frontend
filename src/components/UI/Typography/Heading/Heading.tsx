import React, { FC, HTMLAttributes } from "react";
import classes from "./classes";

export type HeadingSize = "lg" | "md" | "sm" | "sm-variant";

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  size?: HeadingSize;
}

const Heading: FC<ComponentProps> = ({ size, ...props }) => {
  const tag = size === "lg" ? "h1" : size === "md" ? "h3" : "h6";
  const className = classes[size!];
  return React.createElement(
    tag,
    {
      className,
      ...props,
    },
    props.children
  );
};

Heading.defaultProps = {
  size: "md",
};

export default Heading;
