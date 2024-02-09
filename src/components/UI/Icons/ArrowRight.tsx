import { Icon } from "@/utils/@types/types";
import { FC } from "react";

const ArrowRight: FC<Icon> = ({ ...props }) => {
  return (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 1l4 4-4 4"
        stroke="#7C5DFA"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowRight;
