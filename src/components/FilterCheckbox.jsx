import { useDispatch } from "react-redux";
import { toggleFilter } from "../app/slices/invoices";

export const FilterCheckbox = ({ filter }) => {
  const dispatch = useDispatch();

  const handleToggleFilter = (filter) => {
    dispatch(toggleFilter(filter));
  };

  return (
    <label
      className="group inline-flex cursor-pointer items-center gap-3 break-all font-bold capitalize"
      htmlFor={`dropdown-filter-${filter?.name}`}
    >
      <input
        className="filter-checkbox h-4 w-4 shrink-0 appearance-none rounded-sm border-2 border-transparent bg-purple200 transition-colors checked:bg-purple900 group-hover:border-purple900"
        type="checkbox"
        onChange={() => handleToggleFilter(filter)}
        checked={filter?.active}
        id={`dropdown-filter-${filter?.name}`}
      />
      {filter?.name}
    </label>
  );
};
