import { FormProvider, useForm } from "react-hook-form";
import { TextInput, Select, DatePicker } from "./inputs";
import { PillBtn } from "../PillBtn";

const paymentTerms = [
  { id: 1, name: "Net 1 Day" },
  { id: 2, name: "Net 7 Days" },
  { id: 3, name: "Net 14 Days" },
  { id: 4, name: "Net 30 Days" },
];

export const NewInvoiceForm = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">New Invoice</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BillFrom />
          <BillTo />
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

        <TextInput label="Project Description" id="billToProjectDescription" />
      </div>
    </section>
  );
};

const Actions = () => {
  return (
    <div className="flex justify-between">
      <PillBtn color="lightPurple">Discard</PillBtn>
      <button className="btn btn-outline">Save as Draft</button>
      <PillBtn type="submit" color="purple">
        Save & Send
      </PillBtn>
    </div>
  );
};
