import { Switch as HeadlessSwitch } from "@headlessui/react";
import { FC } from "react";

interface SwitchProps {
  checked?: boolean;
  onChange?: (e: boolean) => void;
}

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={`inline-flex leading-none items-center h-[23px] w-[50px] shrink-0 cursor-pointer rounded-full border border-[#9277FF] border-transparent transition-colors duration-200 ease-in-out `}
    >
      <span
        aria-hidden="true"
        className={`${checked ? "translate-x-11" : "translate-x-0"}
            pointer-events-none  h-[20px] w-[20px] transform rounded-full bg-primary shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </HeadlessSwitch>
  );
};

export default Switch;
