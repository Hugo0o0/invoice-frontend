import { context } from "@/components/context/ModalContext";
import { useContext } from "react";

const useModal = () => {
  const { close, isOpen, open } = useContext(context);
  return { close, isOpen, open };
};

export default useModal;
