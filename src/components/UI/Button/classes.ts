import { Variant } from "./Button";

type Classes = {
  [key in Variant]: string;
};

const classes: Classes = {
  primary: "bg-primary hover:bg-secondary",
  secondary:
    "bg-btn-secondary !text-btn-secondary hover:bg-btn-secondary-hover",
  dark: "bg-btn-dark  text-btn-dark hover:bg-btn-dark-hover",
  danger: "bg-danger hover:bg-danger-light",
};

const defaults =
  "text-white capitalize text-sm font-bold rounded-[24px] py-4 px-10 transition-all";

export default {
  classes,
  defaults,
};
