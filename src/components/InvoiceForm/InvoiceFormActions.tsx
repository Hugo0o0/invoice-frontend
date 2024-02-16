import { useParams } from "react-router-dom";
import { Button } from "../UI";
import { SetStateAction } from "react";

const InvoiceFormActions = ({
  closeModal,
  submit,
  setFieldValue,
}: {
  closeModal: React.Dispatch<SetStateAction<boolean>>;
  submit: () => Promise<any>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}) => {
  const params = useParams();
  return (
    <div className="flex gap-5 justify-between w-full md:justify-end items-center">
      {!params.id && (
        <div className="md:flex-1">
          <Button variant="secondary" onClick={closeModal.bind(null, false)}>
            Discard
          </Button>
        </div>
      )}
      <Button
        variant={params.id ? "secondary" : "dark"}
        onClick={
          params.id
            ? closeModal.bind(null, false)
            : () => {
                setFieldValue("status", "draft");
                submit();
              }
        }
      >
        {params.id ? "Cancel" : "Save as Draft"}
      </Button>
      <Button type="submit">
        {params.id ? "Save Changes" : "Save & Send"}
      </Button>
    </div>
  );
};

export default InvoiceFormActions;
