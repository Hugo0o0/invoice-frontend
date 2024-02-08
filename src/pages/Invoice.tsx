import { useParams } from "react-router-dom";

const Invoice = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Invoice</div>;
};

export default Invoice;
