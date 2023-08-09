import React, { useEffect, useState } from "react";
import { useCurrency } from "../hooks/useCurrency";

export const ServicesTable = ({ invoice }) => {
  return (
    <table className="invoice-details-table">
      <TableHead />
      <TableBody items={invoice?.items} />
      <TableFooter total={invoice?.total} />
    </table>
  );
};

const TableHead = () => {
  return (
    <thead className="table-heading">
      <tr>
        <th className="text-left">Item Name</th>
        <th className="text-center">
          <abbr title="quantity" className="no-underline">
            QTY.
          </abbr>
        </th>
        <th className="text-right">Price</th>
        <th className="text-right">Total</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ items }) => {
  const { formatToCurrency } = useCurrency();

  return (
    <tbody className="table-body">
      {items.map((item, index) => (
        <tr key={index}>
          <td className="text-left">
            <span className="break-normal">{item?.name}</span>
            <br />
            <span className="text-purple300 tablet:hidden">
              {item?.quantity} x {formatToCurrency(item?.price)}
            </span>
          </td>
          <td className="text-center">{item?.quantity}</td>
          <td className="text-right">{formatToCurrency(item?.price)}</td>
          <td className="text-right">{formatToCurrency(item?.total)}</td>
        </tr>
      ))}
    </tbody>
  );
};

const TableFooter = ({ total }) => {
  const { formatToCurrency } = useCurrency();
  const [colPadding, setColPadding] = useState();

  useEffect(() => {
    setColPadding(window.innerWidth < 768 ? 1 : 3);

    window.addEventListener("resize", () => {
      setColPadding(window.innerWidth < 768 ? 1 : 3);
    });
  }, []);

  return (
    <tfoot className="table-footer">
      <tr>
        <td className="text-sm font-medium" colSpan={colPadding}>
          Grand Total
        </td>
        <td className="text-right text-2xl font-bold">
          {formatToCurrency(total)}
        </td>
      </tr>
    </tfoot>
  );
};
