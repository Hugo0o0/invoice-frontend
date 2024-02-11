import { Transition } from "@headlessui/react";

const Slide = ({
  children,
  show,
}: {
  children: React.ReactNode;
  show?: boolean;
}) => {
  return (
    <Transition
      show={show}
      enter="transition duration-100 ease-out"
      enterFrom="transform -translate-y-10 opacity-0"
      enterTo="transform translate-y-0  opacity-100"
      leave="transition duration-100 ease-out"
      leaveFrom="transform translate-y-0  opacity-100"
      leaveTo="transform -translate-y-10 opacity-0"
    >
      {children}
    </Transition>
  );
};

export default Slide;
