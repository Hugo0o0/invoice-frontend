import classNames from "classnames";
import { FC } from "react";
import capitalize from "lodash.capitalize";
import Ripple from "../Ripple/Ripple";

interface InvoiceStatusProps {
  status: "paid" | "pending" | "draft";
}

const InvoiceStatus: FC<InvoiceStatusProps> = ({ status }) => {
  const className = classNames(
    "w-[10.4rem] h-[4rem] rounded-[6px] text-sm font-bold flex items-center justify-center gap-[10px]",
    {
      "bg-[#EDF6F6] text-[#33D69F]": status === "paid",
      "bg-[#FFF9F0] text-[#FF8F00]": status === "pending",
      "bg-[#F4F4F5] text-[#373B53]": status === "draft",
    }
  );
  return (
    <div className={className}>
      <Ripple status={status} />
      {capitalize(status)}
    </div>
  );
};

export default InvoiceStatus;
