import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../UI";

const GoBackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={goBack}
      className="flex items-start justify-center leading-none gap-5"
    >
      <ArrowLeft />
      <p className="text-xs text-wild-blue">Go Back</p>
    </button>
  );
};

export default GoBackButton;
