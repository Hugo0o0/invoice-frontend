import { Listbox } from "@headlessui/react";
import { ArrowDown } from "../UI";
import capitalize from "lodash.capitalize";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type StatusType = "paid" | "pending" | "draft";

const status: {
  id: number;
  name: StatusType;
}[] = [
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
  const [filters, setFilters] = useState<StatusType[] | null>(null);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const statusSearchParams = filters?.join(",");
    if (statusSearchParams) setSearchParams({ status: statusSearchParams });
    else setSearchParams({});
  }, [filters]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as StatusType;
    if (!filters) setFilters([value]);
    else if (e.target.checked) {
      setFilters((prev) => [...(prev as StatusType[]), value]);
    } else {
      setFilters((prev) => {
        const filtered = prev!.filter((item) => item !== value);
        if (filtered.length === 0) return null;
        return filtered;
      });
    }
  };

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
              value={item.name}
              checked={filters ? filters.includes(item.name) : false}
              onChange={handleInputChange}
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
