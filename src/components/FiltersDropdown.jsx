import { Popover, Transition } from "@headlessui/react";
import { FilterCheckbox } from "./FilterCheckbox";

export const FiltersDropdown = () => {
  const filters = ["draft", "pending", "paid"];

  return (
    <Popover className="relative w-fit">
      {({ open }) => (
        <>
          <Button open={open}>
            <span>
              Filter{" "}
              <span className="sr-only tablet:not-sr-only">by status</span>
            </span>
          </Button>
          <Panel>
            {filters.map((filter, index) => (
              <FilterCheckbox key={index} filter={filter} />
            ))}
          </Panel>
        </>
      )}
    </Popover>
  );
};

const Button = ({ children, open }) => {
  return (
    <Popover.Button className="flex appearance-none items-center gap-3 font-bold">
      {children}
      <img
        className={`transition-all duration-300 ${open && "-rotate-180"}`}
        src="/assets/icon-arrow-down.svg"
        alt="arrow down"
      />
    </Popover.Button>
  );
};

const Panel = ({ children }) => {
  return (
    <Transition
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 -translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
      className="absolute right-1/2 mt-5 translate-x-1/2"
    >
      <Popover.Panel className="flex w-48 flex-col items-start gap-4 rounded-lg bg-white p-6 shadow">
        {children}
      </Popover.Panel>
    </Transition>
  );
};
