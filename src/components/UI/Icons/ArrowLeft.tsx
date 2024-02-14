import { Icon } from "@/utils/@types/types";
import { FC } from "react";

const ArrowLeft: FC<Icon> = ({ ...props }) => {
  return (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke="#9277FF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowLeft;
