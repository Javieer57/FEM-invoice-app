import { FiltersDropdown } from "../components/FiltersDropdown";
import { NewInvoiceBtn } from "../components/NewInvoiceBtn";
import { InvoicesList } from "../components/InvoicesList";

export const Home = () => {
  return (
    <div className="mx-auto w-full max-w-[31.25rem] px-6 py-9 tablet:max-w-[42rem] tablet:px-0 tablet:py-16 desktop:max-w-[45.625rem] desktop:py-20">
      <header className="mb-8 flex items-center justify-between tablet:mb-14 desktop:mb-16">
        <div>
          <h1 className="text-2xl font-bold tablet:mb-2 tablet:text-4xl">
            Invoices
          </h1>
          <p className="text-sm font-medium text-gray200">
            <span className="sr-only tablet:not-sr-only">There are</span> 4{" "}
            <span className="sr-only tablet:not-sr-only">total</span> invoices
          </p>
        </div>

        <div className="flex items-center gap-4 tablet:gap-10">
          <FiltersDropdown />
          <NewInvoiceBtn />
        </div>
      </header>

      <InvoicesList />
    </div>
  );
};
