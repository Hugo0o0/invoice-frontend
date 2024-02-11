import { createContext, useState } from "react";

const context = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

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
