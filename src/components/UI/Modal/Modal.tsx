import { createPortal } from "react-dom";
import { Fade } from "..";
import ModalContent from "./ModalContent/ModalContent";

const Modal = ({
  children,
  isOpen,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
}) => {
  return createPortal(
    <Fade show={isOpen}>
      <div className="fixed top-0 z-50 left-0 w-full h-full bg-modal flex items-center justify-center">
        {children}
      </div>
    </Fade>,
    document.getElementById("modal")!
  );
};

Modal.Content = ModalContent;

export default Modal;
