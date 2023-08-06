import { FiltersDropdown } from "./components/FiltersDropdown";
import { NewInvoiceBtn } from "./components/NewInvoiceBtn";
import { InvoiceItem } from "./components/InvoiceItem";
import Data from "../public/assets/data.json";

function App() {
  return (
    <main>
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

      <section>
        <ul className="grid gap-4">
          {Data.map((invoice) => (
            <li key={invoice.id}>
              <InvoiceItem invoice={invoice} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
