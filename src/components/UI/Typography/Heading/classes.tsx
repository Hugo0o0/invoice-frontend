import { HeadingSize } from "./Heading";

type Classes = {
  [key in HeadingSize]: string;
};

const classes: Classes = {
  lg: "text-lg font-bold leading-xl tracking-xl",
  md: "text-md font-bold leading-md tracking-lg",
  sm: "text-sm font-bold leading-lg tracking-md",
  "sm-variant": "text-sm font-bold leading-xs tracking-md",
};

export default classes;
