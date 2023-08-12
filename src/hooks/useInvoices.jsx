import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Invoices from "../assets/data.json";

export const useInvoices = () => {
  const filters = useSelector((state) => state.invoices.filters);
  const activeFilters = filters.filter((filter) => filter.active);
  const [visibleInvoices, setVisibleInvoices] = useState([]);

  useEffect(() => {
    // if there are no active filters, show all invoices
    // otherwise, show only invoices that match the active filters
    const filteredInvoices = Invoices.filter((invoice) =>
      activeFilters.length === 0
        ? true
        : activeFilters.some((filter) => filter.name === invoice.status),
    );

    setVisibleInvoices(filteredInvoices);
  }, [filters]);

  const visibleInvoicesCopy = () => {
    return (
      <>
        {visibleInvoices.length === 0 ? (
          "No invoices"
        ) : (
          <>
            <span className="sr-only tablet:not-sr-only">
              There {visibleInvoices.length === 1 ? "is" : "are"}
            </span>
            {` ${visibleInvoices.length} `}
            <span className="sr-only tablet:not-sr-only">total</span>{" "}
            {visibleInvoices.length === 1 ? "invoice" : "invoices"}
          </>
        )}
      </>
    );
  };

  return { visibleInvoices, visibleInvoicesCopy };
};
