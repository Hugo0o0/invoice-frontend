import { createContext, useState } from "react";

const context = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

const ModalContext = ({
  children,
  isModalOpen,
}: {
  children: React.ReactNode;
  isModalOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(isModalOpen);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <context.Provider value={{ isOpen, open, close }}>
      {children}
    </context.Provider>
  );
};

export default ModalContext;
export { context };
