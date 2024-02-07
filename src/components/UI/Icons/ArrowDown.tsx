import { Icon } from "@/utils/@types/types";
import { FC } from "react";

const ArrowDown: FC<Icon> = ({ ...props }) => {
  return (
    <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4.228 4.228L9.456 1"
        stroke="#7C5DFA"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        {...props}
      />
    </svg>
  );
};

export default ArrowDown;
