import React from "react";

export const InvoiceDetailsSummary = ({ invoice }) => {
  return (
    <>
      <Description invoice={invoice} />
      <SenderAddress invoice={invoice} />
      <Dates invoice={invoice} />
      <ClientAddress invoice={invoice} />
      <Email invoice={invoice} />
    </>
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
        <time
          dateTime={invoice?.createdAt}
          className="font-bold text-darkblue900"
        >
          {invoice?.createdAt}
        </time>
      </p>

      <p className="flex flex-col gap-3">
        Payment Due
        <time
          dateTime={invoice?.paymentDue}
          className="font-bold text-darkblue900"
        >
          {invoice?.paymentDue}
        </time>
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
