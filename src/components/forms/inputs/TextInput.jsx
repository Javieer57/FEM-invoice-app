import { useFormContext } from "react-hook-form";

export const TextInput = ({
  label,
  placeholder,
  id,
  className,
  type = "text",
}) => {
  const { register } = useFormContext();

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 text-sm font-semibold text-purple300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        {...register(id)}
        className="w-full rounded-[0.25rem] border-2 border-purple200 bg-white px-5 pb-3 pt-4 font-bold leading-4 hover:border-purple900 focus:border-purple900 focus:outline-none"
        placeholder={placeholder && `e.g. ${placeholder}`}
        type={type}
      />
    </div>
  );
};
