import Data from "../assets/data.json";
import { InvoiceItem } from "./InvoiceItem";

export const InvoicesList = () => {
  const invoices = Data;
  //   const invoices = [];

  return (
    <section>
      {invoices.length === 0 ? (
        <EmptyList />
      ) : (
        <ul className="grid gap-4">
          {Data.map((invoice) => (
            <li key={invoice.id}>
              <InvoiceItem invoice={invoice} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

const EmptyList = () => {
  return (
    <div className="text-center">
      <img
        src="/assets/illustration-empty.svg"
        alt=""
        className="mb-11 inline-block tablet:mb-16"
      />

      <p className="mb-6 text-2xl font-bold">There is nothing here</p>

      <p className="text-sm font-medium text-slate-400">
        Create an invoice by clicking the <br />
        <span className="font-bold">New Invoice</span> button and get started
      </p>
    </div>
  );
};
