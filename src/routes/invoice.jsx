import { Link } from "react-router-dom";
import { ServicesTable } from "../components/InvoiceServicesTable";
import { InvoiceDetailsSummary } from "../components/InvoiceDetailsSummary";
import { InvoiceHeader } from "../components/InvoiceHeader";

const invoice = {
  id: "RT3080",
  createdAt: "2021-08-18",
  paymentDue: "2021-08-19",
  description: "Re-branding",
  paymentTerms: 1,
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  status: "paid",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "106 Kendell Street",
    city: "Sharrington",
    postCode: "NR24 5WQ",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: 1800.9,
      total: 1800.9,
    },
  ],
  total: 1800.9,
};

export const InvoicePage = () => {
  return (
    <div className="mx-auto w-full max-w-[31.25rem] px-6 py-9 tablet:max-w-[42rem] tablet:px-0 tablet:py-16 desktop:max-w-[45.625rem] desktop:py-20">
      <nav className="mb-8">
        <GoBack />
      </nav>

      <header className="mb-4 rounded-lg bg-white p-6 shadow-light tablet:mb-6 tablet:flex tablet:items-center tablet:justify-between">
        <InvoiceHeader invoice={invoice} />
      </header>

      <section className="mb-28 rounded-lg bg-white p-6 text-purple300 shadow-light">
        <div className="mb-10 grid grid-cols-2 gap-8 font-medium tablet:grid-cols-4">
          <InvoiceDetailsSummary invoice={invoice} />
        </div>

        <ServicesTable invoice={invoice} />
      </section>
    </div>
  );
};

const GoBack = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-6 font-bold leading-none transition-colors hover:text-purple300 focus:text-purple300"
    >
      <img src="/assets/icon-arrow-left.svg" alt="" />
      Go back
    </Link>
  );
};
