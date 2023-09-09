import { Listbox, Transition } from "@headlessui/react";
import { Controller, useFormContext } from "react-hook-form";

export const Select = ({ label, options, id }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={id}
        defaultValue={options[0]}
        render={({ field: { onChange, value } }) => (
          <Listbox value={value} onChange={onChange}>
            {({ open }) => (
              <>
                <Label label={label} />

                <div className="relative">
                  <Button open={open}>{value.name}</Button>
                  <Options options={options} />
                </div>
              </>
            )}
          </Listbox>
        )}
      />
    </div>
  );
};

const Label = ({ label }) => {
  return (
    <Listbox.Label className="mb-2 text-sm font-semibold text-purple300">
      {label}
    </Listbox.Label>
  );
};

const Button = ({ children, open }) => {
  return (
    <Listbox.Button
      className={`relative w-full rounded-[0.25rem] border-2 border-purple200 bg-white px-5 py-4 text-left font-bold hover:border-purple900 focus:border-purple900 focus:outline-none ${
        open && "rounded-b-none border-b-transparent"
      }`}
    >
      {children}
      <img
        src="/assets/icon-arrow-down.svg"
        alt="arrow down"
        className={`absolute right-5 top-1/2 -translate-y-1/2 transform transition-all duration-300 ${
          open && "-rotate-180"
        }`}
      />
    </Listbox.Button>
  );
};

const Options = ({ options }) => {
  return (
    <Transition
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 -translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
      className="absolute w-full"
    >
      <Listbox.Options
        static
        className="rounded-b-[0.25rem] border-2 border-purple200 bg-white focus:outline-none"
      >
        {options.map((option) => (
          <Listbox.Option
            className="cursor-pointer px-5 py-4 font-bold transition-colors hover:text-purple900  data-[headlessui-state~='active']:text-purple900"
            key={option.id}
            value={option}
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  );
};
