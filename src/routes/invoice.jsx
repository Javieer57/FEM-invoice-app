import { Link } from "react-router-dom";
import { StatusBadge } from "../components/StatusBadge";

import { ServicesTable } from "../components/InvoiceServicesTable";

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
    <main className="mx-auto w-full max-w-[31.25rem] py-9 tablet:max-w-[42rem] tablet:py-16 desktop:max-w-[45.625rem] desktop:py-20">
      <nav>
        <Link
          to="/"
          className="inline-flex items-center gap-6 font-bold leading-none transition-colors hover:text-purple300 focus:text-purple300"
        >
          <img src="/assets/icon-arrow-left.svg" alt="" />
          Go back
        </Link>
      </nav>

      <header className="mb-4 rounded-lg bg-white p-6">
        <div className="flex w-full items-center justify-between gap-3 font-medium text-gray200">
          Status
          <div>
            <StatusBadge status="pending" />
          </div>
        </div>

        {/* <div>edit delete mark as paid</div> */}
      </header>

      <section className="rounded-lg bg-white p-6">
        {/* #XM9141 Graphic Design 19 Union Terrace London E1 3EZ United Kingdom
        Invoice Date Bill To 21 Aug 2021 Alex Grim Payment Due 84 Church Way
        Bradford BD1 9PB United Kingdom 20 Sep 2021 Sent to alexgrim@mail.com */}
        <ServicesTable invoice={invoice} />
      </section>
    </main>
  );
};
