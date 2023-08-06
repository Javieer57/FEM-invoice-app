export const FilterCheckbox = ({ filter }) => {
  return (
    <label
      className="group inline-flex cursor-pointer items-center gap-3 break-all font-bold capitalize"
      htmlFor={`dropdown-filter-${filter}`}
    >
      <input
        className="filter-checkbox h-4 w-4 shrink-0 appearance-none rounded-sm border-2 border-transparent bg-purple200 transition-colors checked:bg-purple900 group-hover:border-purple900"
        type="checkbox"
        id={`dropdown-filter-${filter}`}
      />
      {filter}
    </label>
  );
};
