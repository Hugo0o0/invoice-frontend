import { Variant } from "./Button";

type Classes = {
  [key in Variant]: string;
};

const classes: Classes = {
  primary: "bg-primary hover:bg-secondary",
  secondary:
    "bg-btn-secondary py-5 !text-btn-secondary hover:bg-btn-secondary-hover",
  dark: "bg-btn-dark  text-btn-dark hover:bg-btn-dark-hover",
  danger: "bg-danger hover:bg-danger-light",
};

const defaults =
  "text-white capitalize text-sm font-bold rounded-full py-3 px-7 transition-all";

export default {
  classes,
  defaults,
};
