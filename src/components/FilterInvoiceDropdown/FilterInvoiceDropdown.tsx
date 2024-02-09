import { Listbox } from "@headlessui/react";
import { ArrowDown } from "../UI";
import capitalize from "lodash.capitalize";
import { useDispatch } from "react-redux";
import { filterByStatus } from "@/store/invoice/invoice-slice";
import { useEffect, useState } from "react";

const status = [
  {
    id: 1,
    name: "draft",
  },
  {
    id: 2,
    name: "pending",
  },
  {
    id: 3,
    name: "paid",
  },
];

const FilterInvoiceDropdown = () => {
  const [filter, setFilter] = useState<string[]>(["draft", "pending", "paid"]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByStatus(filter));
  }, [filter]);

  return (
    <Listbox as={"div"} className="relative">
      <Listbox.Button className="flex items-center gap-3">
        <p className="text-sm md:block hidden font-bold">Filter by status</p>
        <p className="text-sm md:hidden block font-bold">Filter</p>
        <ArrowDown />
      </Listbox.Button>

      <Listbox.Options
        unmount={false}
        className="absolute w-[19rem] py-12 px-5 top-14 flex flex-col justify-center bg-item rounded-xl"
      >
        {status.map((item) => (
          <Listbox.Option
            value={item.name}
            onClick={(e) => e.stopPropagation()}
            key={item.id}
            as="div"
            className={"flex items-center gap-5"}
          >
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              checked={filter.includes(item.name)}
              value={item.name}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter((prev) => [...prev, e.target.value]);
                }

                if (!e.target.checked) {
                  setFilter((prev) => prev.filter((i) => i !== e.target.value));
                }
              }}
            />
            <label className="text-sm font-bold" htmlFor="draft">
              {capitalize(item.name)}
            </label>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default FilterInvoiceDropdown;
