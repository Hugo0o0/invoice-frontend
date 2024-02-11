import useModal from "@/utils/hooks/useModal";

const ModalCloseButton = () => {
  const { close } = useModal();
  return (
    <button className="absolute top-3 right-3">
      <svg
        onClick={close}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default ModalCloseButton;
