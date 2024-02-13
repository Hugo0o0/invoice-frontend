import { Transition } from "@headlessui/react";
import React from "react";

const Fade = ({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) => {
  return (
    <Transition
      enter="transition duration-200 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-200 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={show}
    >
      {children}
    </Transition>
  );
};

export default Fade;
