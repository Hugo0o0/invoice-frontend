import { InvoiceFormProps, InvoiceItem } from "@/utils/@types/types";
import InputGroup from "../InputGroup/InputGroup";
import { Button, Plus, Trash } from "../UI";
import { FC } from "react";

interface ItemListsProps extends InvoiceFormProps<InvoiceItem[]> {
  setItems: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ItemLists: FC<ItemListsProps> = ({
  values = null,
  setItems,
  handleBlur,
  handleChange,
  errors,
}) => {
  const handleAddItem = () => {
    if (values) {
      setItems("items", [
        ...values,
        { name: "", quantity: 0, price: 0, total: 0 },
      ]);
    } else {
      setItems("items", [{ name: "", quantity: 0, price: 0, total: 0 }]);
    }
  };

  const handleRemoveItem = (index: number) => {
    if (values) {
      const newItems = values.filter((_, i) => i !== index);
      setItems("items", newItems);
    }
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    handleChange(e);
    const total = values ? +e.target.value * +values[index].price : 0;
    setItems(`items[${index}].total`, total);
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    handleChange(e);
    const total = values ? +e.target.value * +values[index].quantity : 0;
    setItems(`items[${index}].total`, total);
  };

  return (
    <>
      {values &&
        values.map((item, index) => (
          <div
            key={Math.random() * index}
            className="grid grid-cols-4 grid-rows-2 md:grid-rows-none md:grid-cols-items  mt-5 items-center justify-between gap-5"
          >
            <InputGroup
              label="Item Name"
              value={item.name}
              name={`items[${index}].name`}
              onBlur={handleBlur}
              onChange={handleChange}
              errorMessage={errors?.[index]?.name}
              className="md:row-start-auto md:col-span-1 row-start-1 col-span-full"
            />
            <InputGroup
              label="Qty"
              inputClassName="!px-2"
              name={`items[${index}].quantity`}
              onBlur={handleBlur}
              onChange={(e) => {
                handleQuantityChange(e, index);
              }}
              value={item.quantity}
              type="number"
              errorMessage={errors?.[index]?.quantity}
            />
            <InputGroup
              label="Price"
              onBlur={handleBlur}
              name={`items[${index}].price`}
              onChange={(e) => {
                handlePriceChange(e, index);
              }}
              type="number"
              value={+item.price}
              errorMessage={errors?.[index]?.price}
            />
            <InputGroup
              label="Total"
              onBlur={handleBlur}
              name={`items[${index}].total`}
              onChange={handleChange}
              value={item.total}
              errorMessage={errors?.[index]?.total}
              readOnly
              inputClassName="border-none"
            />
            <Trash onClick={handleRemoveItem.bind(null, index)} />
          </div>
        ))}
      <Button
        onClick={handleAddItem}
        variant="secondary"
        className="w-full flex items-center justify-center gap-5"
      >
        <Plus />
        Add New Item
      </Button>
    </>
  );
};

export default ItemLists;
