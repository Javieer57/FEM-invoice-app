import { FiltersDropdown } from "./components/FiltersDropdown";
import { NewInvoiceBtn } from "./components/NewInvoiceBtn";

function App() {
  return (
    <>
      <div className="flex items-center gap-4 tablet:gap-10">
        <FiltersDropdown />
        <NewInvoiceBtn />
      </div>
    </>
  );
}

export default App;
