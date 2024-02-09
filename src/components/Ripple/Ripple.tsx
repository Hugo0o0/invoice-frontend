import classNames from "classnames";
import { FC } from "react";

interface InvoiceStatusProps {
  status: "paid" | "pending" | "draft";
}

const Ripple: FC<InvoiceStatusProps> = ({ status }) => {
  const className = classNames("w-[8px] h-[8px] rounded-full z-10 relative", {
    "bg-[#33D69F]": status === "paid",
    "bg-[#FF8F00] after:w-full after:h-full after:-z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:border after:border-[#FF8F00] after:animate-ripple":
      status === "pending",
    "bg-sidebar": status === "draft",
  });

  return <div className={className}></div>;
};

export default Ripple;
