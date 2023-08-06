import { StatusBadge } from "./StatusBadge";

export const InvoiceItem = ({ invoice }) => {
  const formatToCurrency = (value) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(value);
  };

  return (
    <article>
      <a href="#" className=" invoice-item rounded-lg bg-white p-6">
        <p className="invoice-item-id font-bold">
          <span className="text-purple300">#</span>
          {invoice?.id}
        </p>
        <p className="invoice-item-name text-sm font-medium text-purple300">
          {invoice?.clientName}
        </p>
        <p className="invoice-item-due text-sm font-medium text-purple300">
          Due {invoice?.paymentDue}
        </p>
        <p className="invoice-item-total font-bold">
          {formatToCurrency(invoice?.total)}
        </p>
        <div className="invoice-item-status">
          <StatusBadge status={invoice?.status} />
        </div>
        <img
          className="invoice-item-arrow hidden justify-self-end tablet:inline-block"
          src="/assets/icon-arrow-right.svg"
          alt="arrow right"
        />
      </a>
    </article>
  );
};
