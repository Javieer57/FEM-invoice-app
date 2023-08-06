export const NewInvoiceBtn = () => {
  return (
    <button className="flex items-center gap-4 rounded-full bg-purple900 p-2 pr-4 font-bold transition-colors hover:bg-purple400 focus:bg-purple400">
      <span className="flex items-center justify-center rounded-full bg-white p-3">
        <img src="/assets/icon-plus.svg" alt="plus icon" />
      </span>
      <span className="text-white">
        New <span className="sr-only tablet:not-sr-only">Invoice</span>
      </span>
    </button>
  );
};
