export const TextInput = ({ label, placeholder, id }) => {
  return (
    <div>
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
        name="street_address"
        className="w-full rounded-[0.25rem] border-2 border-purple200 bg-white px-5 pb-3 pt-4 font-bold leading-4 hover:border-purple900 focus:border-purple900 focus:outline-none"
        placeholder={placeholder && `e.g. ${placeholder}`}
        type="text"
      />
    </div>
  );
};
