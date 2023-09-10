import { FormProvider, useForm } from "react-hook-form";
import { TextInput, Select, DatePicker } from "./inputs";
import { PillBtn } from "../PillBtn";
import { useFormUtilities } from "../../hooks";
import { useState } from "react";

const paymentTerms = [
  { id: 1, name: "Net 1 Day" },
  { id: 2, name: "Net 7 Days" },
  { id: 3, name: "Net 14 Days" },
  { id: 4, name: "Net 30 Days" },
];

export const NewInvoiceForm = () => {
  const methods = useForm();
  const { formatNewFormData } = useFormUtilities();

  const onSubmit = (data) => {
    const formData = formatNewFormData(data);
    console.table(formData);
  };

  return (
    <div className="mx-auto max-w-3xl bg-white p-5">
      <h2 className="mb-5 text-2xl font-bold">New Invoice</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BillFrom />
          <BillTo />
          <Items />
          <Actions />
        </form>
      </FormProvider>
    </div>
  );
};

const BillFrom = () => {
  return (
    <section>
      <h3 className="mb-6 font-bold text-purple900">Bill From</h3>

      <div className="mb-10 grid gap-6">
        <TextInput label="Street Address" id="billFromStreet" />

        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3">
          <TextInput label="City" id="billFromCity" />
          <TextInput label="Post Code" id="billFromPostCode" />
          <TextInput
            className="col-span-2 tablet:col-span-1"
            label="Country"
            id="billFromCountry"
          />
        </div>
      </div>
    </section>
  );
};

const BillTo = () => {
  return (
    <section>
      <h3 className="mb-6 font-bold text-purple900">Bill To</h3>

      <div className="mb-10 grid gap-6">
        <TextInput label="Client's Name" id="billToName" />
        <TextInput label="Client's Email" id="billToEmail" type="email" />
        <TextInput label="Street Address" id="billStreetAdress" />

        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-3">
          <TextInput label="City" id="billToCity" />
          <TextInput label="Post Code" id="billToPostCode" />
          <TextInput
            className="col-span-2 tablet:col-span-1"
            label="Country"
            id="billToCountry"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <DatePicker label="Invoice Date" id="billToInvoiceDate" />

          <Select
            label="Payment Terms"
            options={paymentTerms}
            id="billToPaymentTerms"
          />
        </div>

        <TextInput
          label="Project Description"
          id="billToProjectDescription"
          placeholder="Graphic Design Service"
        />
      </div>
    </section>
  );
};

const Items = () => {
  const [Items, setItems] = useState([]);

  return (
    <section className="mb-12">
      <h3 className="mb-7 text-lg font-bold text-purple300">Item List</h3>

      <table className="new-invoice-form-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>
              <abbr className="no-underline" title="quantity">
                QTY.
              </abbr>
            </th>
            <th>Price</th>
            <th colSpan={2}>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <TextInput id="itemName" />
            </td>
            <td>
              <TextInput id="itemQty" type="number" />
            </td>
            <td>
              <TextInput id="itemPrice" type="number" />
            </td>
            <td>
              <TextInput id="itemTotal" type="number" />
            </td>
            <td className="text-right">
              <button
                onClick={() => setItems([...Items, {}])}
                className="text-gray200 transition-colors hover:text-orange600 focus:text-orange-600"
              >
                <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div className="mb-10 grid gap-6">
        {Items.lenght > 0 ? (
          Items.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-2 gap-6 tablet:grid-cols-3"
              >
                <TextInput label="Item Name" id="itemName" />
                <TextInput label="Qty" id="itemQty" type="number" />
                <TextInput label="Price" id="itemPrice" type="number" />
                <TextInput label="Total" id="itemTotal" type="number" />
              </div>
            );
          })
        ) : (
          <div className="flex justify-center">
            <span>Item Name</span>
            <span>Qty. </span>
            <span>Price </span>
            <span>Total</span>
          </div>
        )}
      </div> */}
    </section>
  );
};

const Actions = () => {
  return (
    <div className="flex justify-between gap-2">
      <PillBtn color="lightPurple">Discard</PillBtn>

      <div className="space-x-2">
        <PillBtn color="darkBlue">Save as Draft</PillBtn>
        <PillBtn type="submit" color="purple">
          Save & Send
        </PillBtn>
      </div>
    </div>
  );
};
