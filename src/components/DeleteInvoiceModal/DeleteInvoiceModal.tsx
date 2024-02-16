import { FC } from "react";
import Modal from "../UI/Modal/Modal";
import { Button, Heading } from "../UI";
import useDeleteInvoice from "@/utils/hooks/invoice/useDeleteInvoice";

interface DeleteInvoiceModalProps {
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteInvoiceModal: FC<DeleteInvoiceModalProps> = ({
  id,
  isOpen,
  setIsOpen,
}) => {
  const { mutate } = useDeleteInvoice(id);

  return (
    <Modal isOpen={isOpen}>
      <Modal.Content className="flex flex-col gap-6 max-w-[32.7rem] md:max-w-[48rem]">
        <Heading size="md">Confirm Deletion</Heading>
        <p className="text-regent-gray text-xs">
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>

        <div className="flex gap-5 justify-end">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => mutate()}>
            Delete
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default DeleteInvoiceModal;
