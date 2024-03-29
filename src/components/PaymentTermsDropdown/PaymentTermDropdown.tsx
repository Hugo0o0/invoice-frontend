import { Listbox } from "@headlessui/react";
import { FC, useState } from "react";
import { ArrowDown, Slide } from "../UI";

const options = [
  { id: 1, value: "Net 1 day" },
  { id: 2, value: "Net 7 days" },
  { id: 3, value: "Net 14 days" },
  { id: 4, value: "Net 30 days" },
];

interface PaymentTermDropdownProps {
  option?: number;
  onSelect?: (value: number) => void;
}

const PaymentTermDropdown: FC<PaymentTermDropdownProps> = ({
  option,
  onSelect,
}) => {
  const defaultOption = options.find((opt) => opt.id === option);
  const [selectedPerson, setSelectedPerson] = useState(
    defaultOption || options[0]
  );
  return (
    <Listbox
      value={selectedPerson}
      onChange={(val) => {
        setSelectedPerson(val);
        onSelect && onSelect(val.id);
      }}
    >
      <Listbox.Button className="border w-full flex items-center justify-between text-sm font-bold border-input focus:border-input-focus rounded-[4px] px-5 py-4">
        <p>{selectedPerson.value}</p>
        <ArrowDown />
      </Listbox.Button>
      <Slide>
        <Listbox.Options className="bg-item rounded-[4px] top-0 cursor-pointer text-sm font-bold ">
          {options.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              className="border-b-[1px] transition-all hover:text-primary border-input px-5 py-4"
            >
              {person.value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Slide>
    </Listbox>
  );
};

export default PaymentTermDropdown;
