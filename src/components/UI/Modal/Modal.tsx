import useModal from "@/utils/hooks/useModal";
import { createPortal } from "react-dom";
import { Fade } from "..";
import ModalContent from "./ModalContent/ModalContent";
import ModalCloseButton from "./ModalCloseButton/ModalCloseButton";

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const { close, isOpen } = useModal();
  return createPortal(
    <Fade show={isOpen}>
      <div
        onClick={close}
        className="fixed top-0 left-0 w-full h-full bg-modal flex items-center justify-center backdrop-blur-xl"
      >
        {children}
      </div>
    </Fade>,
    document.getElementById("modal")!
  );
};

Modal.Content = ModalContent;
Modal.CloseButton = ModalCloseButton;

export default Modal;
