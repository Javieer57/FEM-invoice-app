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

      <section className="rounded-lg bg-white p-6 text-purple300">
        <div className="mb-10 grid grid-cols-2 gap-8 font-medium tablet:grid-cols-4">
          <Description invoice={invoice} />
          <SenderAddress invoice={invoice} />
          <Dates invoice={invoice} />
          <ClientAddress invoice={invoice} />
          <Email invoice={invoice} />
        </div>

        <ServicesTable invoice={invoice} />
      </section>
    </main>
  );
};

const Description = ({ invoice }) => {
  return (
    <div className="col-start-1 col-end-3">
      <p className="mb-1 font-bold">
        <span className="sr-only">Invoice id:</span> #
        <span className="text-darkblue900">{invoice?.id}</span>
      </p>
      <p>
        <span className="sr-only">Invoice description:</span>
        {invoice?.description}
      </p>
    </div>
  );
};

const SenderAddress = ({ invoice }) => {
  return (
    <address className="col-start-1 col-end-3 flex flex-col not-italic tablet:col-start-3 tablet:col-end-5 tablet:text-right">
      <p className="sr-only">Sender address:</p>

      <p>
        <span className="sr-only">street:</span>
        {invoice?.senderAddress?.street}
      </p>
      <p>
        <span className="sr-only">city:</span>
        {invoice?.senderAddress?.city}
      </p>
      <p>
        <span className="sr-only">post code:</span>
        {invoice?.senderAddress?.postCode}
      </p>
      <p>
        <span className="sr-only">country:</span>
        {invoice?.senderAddress?.country}
      </p>
    </address>
  );
};

const Dates = ({ invoice }) => {
  return (
    <div className="flex flex-col gap-7">
      <p className="flex flex-col gap-3">
        Invoice Date
        <span className="font-bold text-darkblue900">{invoice?.createdAt}</span>
      </p>

      <p className="flex flex-col gap-3">
        Payment Due
        <span className="font-bold text-darkblue900">
          {invoice?.paymentDue}
        </span>
      </p>
    </div>
  );
};

const ClientAddress = ({ invoice }) => {
  return (
    <address className="flex flex-col not-italic">
      <p className="mb-2 flex flex-col gap-3">
        Bill To
        <span className="font-bold text-darkblue900">
          {invoice?.clientName}
        </span>
      </p>

      <p>
        <span className="sr-only">street:</span>
        {invoice?.clientAddress?.street}
      </p>
      <p>
        <span className="sr-only">city:</span>
        {invoice?.clientAddress?.city}
      </p>
      <p>
        <span className="sr-only">post code:</span>
        {invoice?.clientAddress?.postCode}
      </p>
      <p>
        <span className="sr-only">country:</span>
        {invoice?.clientAddress?.country}
      </p>
    </address>
  );
};

const Email = ({ invoice }) => {
  return (
    <p className="flex flex-col gap-3">
      Sent to
      <span className="font-bold text-darkblue900">{invoice?.clientEmail}</span>
    </p>
  );
};
