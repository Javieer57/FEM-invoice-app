import { Link, useNavigate, useParams } from "react-router-dom";
import { useInvoices } from "../hooks/useInvoices";
import {
  ServicesTable,
  InvoiceDetailsSummary,
  InvoiceHeader,
} from "../components";
import { useEffect } from "react";

export const InvoicePage = () => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const { getInvoiceById } = useInvoices();
  const invoice = getInvoiceById(invoiceId);

  useEffect(() => {
    if (!invoice) {
      navigate("/");
    }
  }, [invoice]);

  if (!invoice) {
    return null;
  }

  return (
    <>
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
    </>
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
